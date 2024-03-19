import { Banner } from "./components/banner/Index";

import { Galeria } from "./components/galeria/Index";
import { ListaEventos } from "./components/listaEventos/Index";
import { Servicos } from "./components/servicos/Index";
import { About } from "./components/sobre/Index";
import { HomeLayout } from "./styles";

export function Home() {
  return (
    <HomeLayout>
      <Banner />
      <About />
      <ListaEventos/>
      <Servicos />
      <Galeria />
    </HomeLayout>
  );
}
