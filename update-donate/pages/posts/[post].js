import { Header } from '../../components/Header';

export default function Post() {
  return (
    <div>
      <Header/>
      <main className="conteudo_principal">
        <div className="discussao_usuario-principal">
          <div className="discussao_usuario-fundo">
            <img
              src="../assets/img/usuarioPadrao.png"
              alt=""
              className="discussao_usuario-img"
            />
          </div>
          <h3>Usuário</h3>
        </div>
        <div className="discussao_conteudo-principal">
          <h2 className="discussao_titulo">
            Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo
          </h2>
          <div className="discussao_informacao">
            <div className="discussao_texto-categoria">Software</div>
            <h5 className="discussao_texto-dia">
              Data de publicação<h5 className="discussao_data">dd/mm/yyyy</h5>
            </h5>
          </div>
          <div className="discussao_quantidade-respostas">
            <h5 className="discussao_quantidade-texto">
              Respostas:<h5 className="discussao_quantidade-texto">2</h5>
            </h5>
          </div>
          <p className="discussao_texto-princiapl">
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text
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
    </div>
  );
}
