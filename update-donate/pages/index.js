import { useState, useEffect } from 'react';
import { Header } from '../components/Header';

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
    console.log(user)
  }, []);
  return (
    <div>
        <Header user={user}/>
        <main className="conteudo_principal">
          <div className="conteudo_apresentacao-principal">
            <img className="update_donate-art" src="assets/img/Art2.png" />
            <div className="conteudo_apresentacao">
              <h1 className="titulo_principal">
                Transforme o seu computador antigo em uma causa social!
              </h1>
              <a href="pages/login.html">Login</a>
              <a href="register">Cadastro</a>
              <h3 className="titulo_secundario">
                Doe peças que não usa para pessoas que precisam
              </h3>

              <p>
                Update Donate é uma rede de conexão entre doadores e donatários
                fornecendo uma estrutura sólida para doação de peças de
                informática, componentes e equipamentos eletrônicos usados.
              </p>

              <p>Cadastre-se e ajude!</p>

              <button className="index-button" onClick="toCadastro()">
                Cadastre-se
              </button>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-icon">
            <img
              className="footer_img-logo"
              src="assets/img/log.png"
              alt="Logo 'UpdateDonate'"
            />
          </div>

          <h4 className="footer-label">
            2021
            <br />
            Vozes da Trovoada - Todos os direitos reservados
          </h4>
          <div className="footer-links">
            <a className="priv-link">Privacidade</a>
            <a className="priv-link">Termos de uso</a>
          </div>
        </footer>
      <div className="alerta_backgrand " id="alerta-logout">
        <div className="alerta_conteudo" id="alerta_conteudo">
          <h1 className="alerta_texto">Você deseja sair da sua conta?</h1>
          <p className="alerta_texto alerta_texto-segundo"></p>

          <button>Sair</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
