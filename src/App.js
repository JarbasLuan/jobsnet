import React from "react";
import { Button } from "./button";
import "./App.css";

function App() {
  return (
    <div>
      <div id="Titlle">
        <h1>JobsNET</h1>
      </div>
      <div>
        <h4>Dados Pessoais</h4>
      </div>
      <form id="Pessoal">
        <input type="text" name="nome" placeholder="Digite seu nome" />
        <input
          type="text"
          name="identidade"
          placeholder="Digite seu numero de identidade"
        />
        <input type="text" name="cpf" placeholder="Digite seu cpf" />
        <input type="text" name="cargo" placeholder="Qual o cargo pretendido" />
        <input
          type="text"
          name="nacimento"
          placeholder="Digite sua data de nascimento"
        />
        <input
          type="text"
          name="estadocivil"
          placeholder="Qual o seu estado civil"
        />
        <input type="text" name="sexo" placeholder="Qual o seu sexo" />
      </form>

      <div>
        <h4>
          Dados para contato
        </h4>
      </div>

      <form id="Contato">
        <input type="text" name="endereco" placeholder="Digite seu endereço" />
        <input type="text" name="cep" placeholder="Digite seu CEP" />
        <input type="text" name="bairro" placeholder="Bairro" />
        <input type="text" name="cidade" placeholder="Cidade" />
        <input
          type="text"
          name="celular"
          placeholder="Número de celular com DDD"
        />
        <input type="text" name="email" placeholder="Digite seu email" />
      </form>

      <div id='Button'>
        <Button className="Button" />
      </div>
    </div>
  );
}

export default App;
