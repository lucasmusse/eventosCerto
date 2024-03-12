import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Footer } from "../../components/footer/Index";
import { Header } from "./components/header/Index";

export function LayoutServices() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      
      <Footer />
      
    </LayoutContainer>
  );
}
