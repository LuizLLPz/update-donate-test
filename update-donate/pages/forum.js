import { Header } from '../components/Header';
import { PostCard } from "../components/PostCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Forum() {
  const [user, setUser] = useState();

  const [posts, setPosts] = useState({});
  
  useEffect(async () => {
    const postRes = await axios.get('http://localhost:4000/api/post');
    setUser(JSON.parse(sessionStorage.getItem('user')));
    console.log(postRes);
    console.log(user)
    setPosts({posts: postRes.data[0], filtered: postRes.data[0]});
  }, [])

  const filterPosts = (e) => {
    if (e.target.tagName === 'SELECT') {
      const filtered = posts.posts.filter(post => post.categoria === e.target.value);
      setPosts({...posts, filtered});
    } else {
      setPosts({...posts, filtered: posts.posts.filter(post => post.titulo.toLowerCase().includes(e.target.value.toLowerCase()))});
    }
  }


  return (
    <div>
      <Header user={user}/>
      <main className="conteudo_principal">
        <h1>Fórum</h1>

        <button className="forum_btn">Minhas Postagens</button>

        <select name="" id="selectForum" className="forum_select" onChange={filterPosts}>
          <option value="Todas as categorias">Todas as categorias</option>
          <option value="Software">Software</option>
          <option value="Hardware">Hardware</option>
          <option value="Hardware e Software">Hardware e Software</option>
        </select>
        <form>
          <input
            data-input="search"
            type="text"
            placeholder="Pesquise por assunto"
            onChange = {filterPosts}
          />
          <option value=""></option>
        </form>

        <div className="forum_discussoes">
            {posts.filtered ? 
              posts.filtered.length > 0 ? 
                posts.filtered.map((post) => (
                  <PostCard post={post} key={post.id}/>
                )) :
                'Não há postagens'
            : 'Carregando postagens...'}
        </div>
      </main>

      <div className="alerta_backgrand " id="alerta-logout">
        <div className="alerta_conteudo" id="alerta_conteudo">
          <h1 className="alerta_texto">Você deseja sair da sua conta?</h1>
          <p className="alerta_texto alerta_texto-segundo"></p>

          <button>Sair</button>
          <button>Cancelar</button>
        </div>
      </div>
      <div className="alerta_backgrand " id="alerta-cadastre">
        <div className="alerta_conteudo" id="alerta_conteudo">
          <h1 className="alerta_texto">Você não está logado</h1>
          <p className="alerta_texto alerta_texto-segundo">
            Cadastre-se ou faça o login para participar do fórum
          </p>

          <button id="botaoToCadastro">Cadastre-se</button>
          <button id="botaoToLogin">Login</button>
          <button id="botaoCancelar">Cancelar</button>
        </div>
      </div>
    </div>
  );
}
