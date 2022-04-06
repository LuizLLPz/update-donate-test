import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function Post() {

  const [user, setUser] = useState();
  const [pid, setPid] = useState();
  const [postData, setPostData] = useState();
  const router = useRouter();
  useEffect(async () => {
    if (Object.keys(sessionStorage).includes('user')) {
      setUser(JSON.parse(sessionStorage.getItem('user')));
    }
    if (!pid) setPid(router.query.post);
    const post = pid ? await axios.post('http://localhost:4000/api/post', {pid}) : undefined; 
    if (post) {
      setPostData( {post: post.data.post[0], respostas: post.data.respostas[0]});
    }
  
  }, pid)

  return (
   
    <div>
      <Header user={user}/>
      {postData &&
      <main className="conteudo_principal">
        <div className="discussao_usuario-principal">
          <div className="discussao_usuario-fundo">
            <img
              src="../assets/img/usuarioPadrao.png"
              alt=""
              className="discussao_usuario-img"
            />
          </div>
          {user && <h3>{user.nome}</h3>}
        </div>
        <div className="discussao_conteudo-principal">
          <h2 className="discussao_titulo">
            {postData.post.titulo}
          </h2>
          <div className="discussao_informacao">
            <div className="discussao_texto-categoria">{postData.post.categoria}</div>
            <h5 className="discussao_texto-dia">
              Data de publicação<h5 className="discussao_data">{postData.post.created_at.substr(0, 10)}</h5>
            </h5>
          </div>
          <div className="discussao_quantidade-respostas">
            <h5 className="discussao_quantidade-texto">
              Respostas:<h5 className="discussao_quantidade-texto">2</h5>
            </h5>
          </div>
          <p className="discussao_texto-princiapl">
            {postData.post.corpo}
          </p>
        </div>

        <div className="discussao_comentario">
          <div className=" discussao_conteudo-usuario">
            <div className="discussao_conteudo-img-fundo">
              <img
                className="discussao_conteudo-img"
                src="../assets/img/usuarioPadrao.png"
                alt=""
              />
            </div>
            <div className="discussao_conteudo-info">
              <div className="discussao_conteudo-autor">
                <h4 className="discussao_conteudo-nome">
                  Por<h4 className="discussao_conteudo-nome">Usuário</h4>
                </h4>
              </div>
              <div className="discussao_conteudo-data">
                <h5 className="discussao_conteudo-data-texto">
                  Data de publicação{" "}
                  <h5 className="discussao_conteudo-data-texto">dd/mm/yyyy</h5>
                </h5>
              </div>
            </div>
          </div>
          <div className="discussao_conteudo-cometario">
            <p className="discussao_conteudo-texto">
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text{" "}
            </p>
          </div>
        </div>

        <div className="discussao_adicionar-comentario">
          <button className="discussao_btn">Adicionar à discussão</button>
        </div>
      </main>
      }
    </div>
  );
}
