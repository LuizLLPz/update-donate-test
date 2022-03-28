import { Header } from '../components/Header';
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [registerForm, setRegisterForm] = useState({name: '', email: '', password: '', cpf: ''});
  const submitForm = async (e) => {
    const { data } = await axios.post("http://localhost:4000/api/user", registerForm);
    if (data.error) {
        alert(data.error);
    }
  }
 
  return (
    <div>
    <Header/>
    <main class="conteudo_principal">
    <h1>Cadastre-se</h1>
    <form class="formulario"  action="../pages/cadastroConcluido.html" onsubmit="cadastraDados()">
        <div class="input-container">
            <label for="nome">Nome Completo</label>
            <input type="text" 
            id="nome" 
            name="nome"
            value={registerForm.nome}
            onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})}
            required data-type="nome"/>
            <span class="input-erro">Este campo não está válido</span>
        </div>
        <div class="input-container">
            <label for="email">E-mail</label>
            <input type="email" 
            name="email"
            value={registerForm.email}
            id="email" 
            onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})}
            required data-type="email"/>
            <span class="input-erro">Este campo não está válido</span>
        </div>
        <div class="input-container">
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" required data-type="cpf"/>
            <span class="input-erro">Este campo não está válido</span>
        </div>
        <div class="input-container">
            <label for="senha">Senha</label>
            <input type="password" 
            id="senha" 
            name="senha"
            value={registerForm.senha}
            onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%&*_=+-]).{6,12}" 
            title="A senha deve ter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos" 
            required data-type="senha"
            />
            <span class="input-erro">Este campo não está válido</span>
        </div>
        <button id="cadastroConcluido" onClick={(e) => {
            submitForm(e)
            e.preventDefault();
        }}>Concluir</button>
    </form>

    </main>
    </div>

  );
}