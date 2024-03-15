import { MainContainer, MainContent, Card } from "./styles";
import { Link } from "react-router-dom";
import { Divider } from "../../../../components/divider/Index";

import Casamento from "../../../../assets/casamento.png";

import Corp from "../../../../assets/corporativos.png";
import Matrim from "../../../../assets/matrimonial.png";

const services = [
  { id: 1, img: Matrim, title: "Assessoria de Eventos", link: "/servicos/1" },
  {
    id: 2,
    img: Casamento,
    title: "Montagem de Layout Visual do Evento",
    link: "/servicos/2",
  },
  {
    id: 3,
    img: Corp,
    title: "Análise Finenceira do Evento",
    link: "/servicos/3",
  },
  {
    id: 4,
    img: Corp,
    title: "Estruturação de Eventos Autorais",
    link: "/servicos/4",
  },
];

export function Servicos() {
  return (
    <MainContainer id="servicos">
      <h2>Nossos Serviços</h2>
      <Divider />

      <MainContent>
        {services.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.img} alt="" />

              <div>
                <h3>{item.title}</h3>
                <Link to={item.link}>Saber Mais</Link>
              </div>
            </Card>
          );
        })}
      </MainContent>
    </MainContainer>
  );
}

{
  /* <Card>
          <img src={Matrim} alt="" />

          <div>
            <h3>Assessoria de Eventos</h3>
            <a to="/servicos/1" href="#">
              Saber Mais
            </a>
          </div>
        </Card>
        <Card>
          <img src={Casamento} alt="" />

          <div>
            <h3>Montagem de Layout Visual do Evento</h3>
            <a to="/servicos/2" href="#">
              Saber Mais
            </a>
          </div>
        </Card>
        <Card>
          <img src={Corp} alt="" />

          <div>
            <h3>Análise Finenceira do Evento</h3>
            <a to="/servicos/3" href="#">
              Saber Mais
            </a>
          </div>
        </Card>
        <Card>
          <img src={Aniver} alt="" />

          <div>
            <h3>Estruturação de Eventos Autorais</h3>
            <a to="/servicos/4" href="#">
              Saber Mais
            </a>
          </div>
        </Card> */
}
