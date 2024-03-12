import { Outlet } from "react-router-dom";
import Header from "../../components/header/Index";
import { LayoutContainer } from "./styles";
import { Footer } from "../../components/footer/Index";
import { Contato } from "../../components/contato/Index";


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Contato />
      <Footer />
    </LayoutContainer>
  );
}
