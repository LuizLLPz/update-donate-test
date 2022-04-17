import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';
import { RespostaCard } from '../../components/RespostaCard';
import axios from 'axios';


export default function Post() {

  const [user, setUser] = useState();
  const [postData, setPostData] = useState();
  const router = useRouter();
  useEffect(async () => {
    if (router.isReady) {
      const postRes = await axios.post('http://localhost:4000/api/post', { pid: router.query.post });
      setUser(JSON.parse(sessionStorage.getItem('user')));
      setPostData({post: postRes.data.post[0], respostas: postRes.data.respostas});
    }
}, [router.isReady]);

useEffect(() => {
  if (postData) {
    document.title = `${postData.titulo} - Update Donate`;
  }
}, [postData]);

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
        {postData.respostas && postData.respostas.map(resposta => <RespostaCard resposta={resposta}/> )} 
        

        <div className="discussao_adicionar-comentario">
          <button className="discussao_btn">Adicionar à discussão</button>
        </div>
      </main>
      }
    </div>
  );
}
