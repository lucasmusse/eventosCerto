import { MainContainer, MainContent, TeamContainer, TeamCard } from "./styles";
import { Divider } from "../../../../components/divider/Index";
import Avatar2 from "../../../../assets/avatar2.avif";

export function About() {
  return (
    <MainContainer id="sobreNos">
      <h2>Sobre nós</h2>
      <Divider />
      <MainContent>
        Atuamos no ramo de eventos desde 2020, já fizemos muitos eventos. No
        início da nossa jornada nosso nicho de trabalho era cerimonial. Mas com
        o passar dos anos, desenvolvemos uma paixão no ramo de assessoria e
        montagem do layout do evento. Nosso objetivo é proporcionar uma
        experiência única e momentos incríveis nesse processo. Organizar e
        criar, é nossa especialidade.
      </MainContent>
      <TeamContainer>
        <TeamCard>
          <img src={Avatar2} alt="Membro da equipe" />
          <p>
            <b>Julia Lenzi Dietrich</b>
          </p>
          <p>Assessora de Eventos</p>
        </TeamCard>
        <TeamCard>
          <img src={Avatar2} alt="Membro da equipe" />
          <p>
            <b>Jordana Lenzi</b>
          </p>
          <p>Assistente e Administrativo</p>
        </TeamCard>
      </TeamContainer>
    </MainContainer>
  );
}
