import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import axios from "axios";

export default function Home() {
  const [formPost, setFormPost] = useState({categoria: 'Hardware e Software', titulo: '', corpo: ''});
  const [user, setUser] = useState();
  const [userPosts, setUserPosts] = useState();
  const becameDonator = () => {
    alert('Now you are a donator!');
  }
  useEffect( async () => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
    if (user) {
      const items = await axios.post('http://localhost:4000/api/post', {uid: user.id});
      setUserPosts(items.data[0]);
    }

  }, user);
  const changePostValues = (e) => {
    setFormPost({...formPost, [e.target.name]: e.target.value, uid: user.id});
  }
  const sendPost = async () => {
    console.log(formPost);
    const res = await axios.post('http://localhost:4000/api/post', formPost);
    if (!res.error) {
      alert('Postado com sucesso!');
      const items = await axios.post('http://localhost:4000/api/post', {uid: user.id});
      setUserPosts(items.data[0]);
    }
  };

  return (
    
    <div>
      {user ? 
      <>
      <Header user={user}/>
      <main className="conteudo_principal">
        <div className="perfil_card">
          <div className="perfil_conteudo">
            <div className="perfil_img-fundo">
              <img
                src="../assets/img/usuarioPadrao.png"
                alt=""
                className="perfil_img"
              />
            </div>
            <h2 className="perfil_text perfil_text-usuario">{user.nome.split(' ')[0]}</h2>
          </div>
          <div className="perfil_conteudo">
            <a className="perfil_text">Alterar nome</a>
            <a className="perfil_text">Alterar senha</a>
          </div>

          <button id="torne-seDoador" className="perfil_btn" onClick={becameDonator}>
            Torne-se um doador
          </button>
        </div>

        <div id="conteudoDoador1" className="conteudo_desativado">
          <h2>Pessoas interressadas</h2>
          <div id="perfil_interreses" className="perfil_interreses"></div>
        </div>
        <div id="conteudoDoador2" className="conteudo_desativado">
          <div className="entrada_doacoes">
            <h2>Suas Doações</h2>
            <label>Titulo</label>
            <input data-addDoacao type="text" required id="tituloDoacao" />
            <label>Imagem (URL)</label>
            <input data-addDoacao type="text" required id="imgDoacao" />
            <button data-add>Adicionar doação</button>
          </div>
          <div className="perfil doações" id="suasDoacoes"></div>
        </div>

        <h2 id="addForum">Adicionar postagem ao fórum</h2>
        <div className="perfil_entrada-forum">
          <input
            required
            className="perfil_entrada-discusao-titulo"
            type="text"
            name="titulo"
            placeholder="Titulo"
            id="tituloForum"
            value={formPost.titulo}
            onChange={changePostValues}
          />
          <select className="forum_select" id="selectForum" name="categoria" value={formPost.categoria} onChange={changePostValues}>
            <option value="Hardware e Software">Hardware e Software</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
          </select>
          <textarea
            required
            className="perfil_entrada-discusao-texto"
            id="txtForum"
            cols="30"
            rows="10"
            name="corpo"
            value={formPost.corpo}
            onChange={changePostValues}>
            {" "}
          </textarea>
          <button id="btnAddPostagem" data-enviarDiscussao onClick={sendPost}>
            Enviar
          </button>
        </div>
        <h2>Suas postagens no fórum</h2>
        <div id="perfil_discusoes" className="perfil_discusoes">
        {userPosts && userPosts.map(post => <PostCard post={post}/>)}
        </div>
        <h2>Suas solicitações</h2>
        <div id="seus_interreses" className="perfil_doacoes"></div>
      </main>
      </> : 'Faça login para acessar essa página!'}
    </div>
  );
}
