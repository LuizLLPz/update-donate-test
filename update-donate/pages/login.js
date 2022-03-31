import { Header } from '../components/Header';
import { useState } from "react";
import router from 'next/router';
import axios from "axios";

export default function Register() {
  const [loginForm, setloginForm] = useState({email: '', password: ''});
  const submitForm = async (e) => {
    const { data } = await axios.post("http://localhost:4000/api/user/login", loginForm);
    if (data.error) {
        alert(data.error);
    } else {
        sessionStorage.setItem("user", JSON.stringify(data));
        console.log(sessionStorage.getItem("user"));
        router.push('/');
    }
  }
 
  return (
    <div>
    <Header/>
    <main class="conteudo_principal">
    <h1>Fazer login</h1>
    <form class="formulario"  action="../pages/cadastroConcluido.html" onSubmit="cadastraDados()">

        <div class="input-container">
            <label for="email">E-mail</label>
            <input type="email" 
            name="email"
            value={loginForm.email}
            id="email" 
            onChange={(e) => setloginForm({...loginForm, [e.target.name]: e.target.value})}
            required data-type="email"/>
            <span class="input-erro">Este campo não está válido</span>
        </div>
        <div class="input-container">
            <label for="senha">Senha</label>
            <input type="password" 
            id="senha" 
            name="password"
            value={loginForm.password}
            onChange={(e) => setloginForm({...loginForm, [e.target.name]: e.target.value})}
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