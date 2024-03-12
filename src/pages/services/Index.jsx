import { useEffect } from "react";
import { ServicesContainer } from "./components/servicesList/Index";
import {  MainContainer } from "./styles";



export function Services() {

    useEffect(() => {
        window.scrollTo(0, 0); // Isso fará com que a página role para o topo quando o componente for montado
      }, []);


  return (
    <MainContainer>
      <ServicesContainer />
    </MainContainer>
  );
}
