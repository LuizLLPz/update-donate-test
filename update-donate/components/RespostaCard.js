export const RespostaCard = (resposta) => 
(
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
            Por<h4 className="discussao_conteudo-nome">{resposta.resposta.nome}</h4>
          </h4>
        </div>
        <div className="discussao_conteudo-data">
          <h5 className="discussao_conteudo-data-texto">
            Data de publicação
            {<h5 className="discussao_conteudo-data-texto">{resposta.resposta.created_at.substr(0, 10)}</h5> }
          </h5>
        </div>
      </div>
    </div>
    <div className="discussao_conteudo-cometario">
      <p className="discussao_conteudo-texto">
          {resposta.resposta.corpo}
      </p>
    </div>
  </div>
);
