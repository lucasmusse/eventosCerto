

import LogoPng from '../../assets/logopng.png'
import { HeaderLayout, HeaderMenu } from './styles';





const Header = () => {
  return (
    <HeaderLayout >
      <div className="header--logo">
        <img src={LogoPng} alt="" />
      </div>


      <HeaderMenu>
        <a href="/">Início</a>
        <a href="#sobreNos">Sobre Nós</a>
        <a href="#servicos">Serviços</a>
        <a href="#galeria">Galeria</a>
        <a href="#contato">Contato</a>
      </HeaderMenu>
    </HeaderLayout>
  );
};

export default Header;
