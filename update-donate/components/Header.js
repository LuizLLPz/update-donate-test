import router from "next/router";

export function Header() {
    return (
        <header className="cabecalho">
          <div className="cabecalho_div">
            <img className="cabecalho_img--icon" src="assets/img/icon.png" alt="" />
          </div>
          <div>
            <img
              className="cabecalho_img--logo"
              src="assets/img/log.png"
              alt="Logo 'UpdateDonate'"
            />
          </div>
          <nav className="cabecalho_navegacao" id="cabNav">
            <div className="usuario">
              <div className="usuario_img">
                <img
                  className="usuario_img-padrao"
                  src="assets/img/usuarioPadrao.png"
                  alt=""
                />
              </div>
              <div onClick={() => router.push('/register')} className="usuario_link-cadastro">
                Cadastre-se
              </div>
            </div>
            <ul className="cabecalho_itens">
              <li>
                <div className="cabecalho_item" onClick={() => router.push('/')}>
                  Home
                </div>
              </li>
              <li className="cabecalho_item--login">
                <div className="cabecalho_item" onClick={() => router.push('/login')}>
                  Login
                </div>
              </li>
              <li>
                <div className="cabecalho_item" onClick={() => router.push('/forum')}>
                  Fórum
                </div>
              </li>
              <li>
                <div className="cabecalho_item" onClick={() => router.push('/doacoes')}>
                  Doações
                </div>
              </li>
            </ul>
          </nav>
          <div className="backgrand" id="home-bg"></div>
        </header>
    );
} 