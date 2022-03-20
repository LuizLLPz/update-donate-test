import { Header } from '../components/Header';
import { PostCard } from "../components/PostCard";

export default function Forum() {
  return (
    <div>
      <Header/>
      <main className="conteudo_principal">
        <h1>Fórum</h1>

        <button className="forum_btn">Minhas Postagens</button>

        <select name="" id="selectForum" className="forum_select">
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
          />
          <option value=""></option>
        </form>

        <div className="forum_discussoes">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => 
            (
               <PostCard/>
            ))}
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
