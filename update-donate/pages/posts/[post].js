import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';
import { RespostaCard } from '../../components/RespostaCard';
import { ReplyModal } from '../../components/Modal';
import axios from 'axios';


export default function Post() {

  const [user, setUser] = useState();
  const [postData, setPostData] = useState();
  const [replyModal, setReplyModal] = useState(false);
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
    console.log(postData);
    document.title = `${postData.post.titulo} - Update Donate`;
  }
}, [postData]);

const setModalVisible = () => {
  setReplyModal(!replyModal);
}

const sendReply =  async (value) => {

  await axios.post('http://localhost:4000/api/post', {
    corpo: value,
    uid: user.id,
    pid: router.query.post,
  });
  setPostData({...postData, respostas: [...postData.respostas, {
    id: user.id,
    corpo: value,
    nome: user.nome,
    pid: router.query.post,
    created_at: new Date().toLocaleDateString().split('/').reverse().join('-'),
  }]});
  setReplyModal(false);

}


  return (
   
    <div>

      {replyModal && <ReplyModal setModal={setModalVisible} sendReply={sendReply}/>}
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
          <button className="discussao_btn" onClick={setReplyModal}>Adicionar à discussão</button>
        </div>
      </main>
      }
    </div>
  );
}
