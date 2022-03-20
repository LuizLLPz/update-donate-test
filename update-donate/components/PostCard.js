import router from "next/router";

export const PostCard = () => {
  return (
    <div class="forum_card" onClick={() => router.push("/posts/teste")}>
      <div class="forum_conteudo-texto">
        <div class="forum_texto-parteUm">
          <h2 class="forum_texto-titulo">Post teste</h2>
          <div class="forum_texto-categoria">Software</div>
          <h5 class="forum_texto-dia">Data de publicação:</h5>
        </div>
        <div class="forum_texto-parteDois">
          <h5 class="forum_texto-resposta">Respostas:</h5>
          <h5 class="forum_texto-quantidade">14</h5>
        </div>
      </div>
      <div class="forum_conteudo-usuario">
        <div class="forum_img-fundo">
          <img class="forum_img" src="../assets/img/usuarioPadrao.png" />
        </div>
        <h3 class="forum_usuario">Lucas</h3>
      </div>
    </div>
  );
};
