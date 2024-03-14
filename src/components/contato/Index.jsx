
import { Divider, MainContainer, MainContent, MainTitle } from "./styles";
import divider from '../../assets/divider.png'


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
      <MainTitle>Entre em contato!</MainTitle>
      <Divider src={divider}/>
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

