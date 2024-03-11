
import { MainContainer, MainContent } from "./styles";

import {
  InputText,
  InputEmail,
  InputMensagem,
  InputTel,
  InputSubmit,
} from './inputs/Index';

export function Contato(){
  function submit() {
    alert("Mensagem Enviada");
  }

  return (
    <MainContainer id="contato">
      <h2>Entre em contato!</h2>

      <p>Você pode solicitar um orçamento deixando uma mensagem abaixo.</p>

      <MainContent onSubmit={submit}>
        <InputText />
        <InputTel />
        <InputEmail />
        <InputMensagem />
        <InputSubmit />
      </MainContent>
    </MainContainer>
  );
}

