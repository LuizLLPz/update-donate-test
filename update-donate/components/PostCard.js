import router from "next/router";

export const PostCard = ({post}) => {
  return (
    <div className="forum_card" onClick={() => router.push("/posts/teste")}>
      <div className="forum_conteudo-texto">
        <div className="forum_texto-parteUm">
          <h2 className="forum_texto-titulo">{post.titulo}</h2>
          <div className="forum_texto-categoria">{post.categoria}</div>
          <h5 className="forum_texto-dia">{post.created_at.substr(0, 10)}</h5>
        </div>
        <div className="forum_texto-parteDois">
          <h5 className="forum_texto-resposta">Respostas:</h5>
          <h5 className="forum_texto-quantidade">{post.respostas}</h5>
        </div>
      </div>
      <div className="forum_conteudo-usuario">
        <div className="forum_img-fundo">
          <img className="forum_img" src="../assets/img/usuarioPadrao.png" />
        </div>
        <h3 className="forum_usuario">{post.nome.split(' ')[0]}</h3>
      </div>
    </div>
  );
};
