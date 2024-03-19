import { MainContainer, MainContent, ContactItem } from "./styles";
import Logo from "../../assets/logopng.png";
import Whats from "../../assets/whats.png";
import Insta from "../../assets/insta.png";
import Email from "../../assets/mail.png";

export function Footer() {
  return (
    <MainContainer>
      <MainContent>
        <ContactItem>
          <img src={Whats} alt="WhatsApp" />
          <p>
            <a href="https://api.whatsapp.com/send?phone=5547996053569">
              (47) 9 9605-3569
            </a>
          </p>
        </ContactItem>
        <ContactItem>
          <img src={Email} alt="Email" />
          <p>event.assessoriaonline@gmail.com</p>
        </ContactItem>
        <ContactItem>
          <img src={Insta} alt="" />
          <p>
            <a href="https://www.instagram.com/event.assessoria/">
              @event.assessoria
            </a>
          </p>
        </ContactItem>
      </MainContent>

      <img src={Logo} alt="Instagram" />
    </MainContainer>
  );
}
