import { ServiceSection, ServiceSectionInvert } from "./styles";

export function Service(props) {
  return (
    <ServiceSection>
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </ServiceSection>
  );
}

export function ServiceInvert(props) {
  return (
    <ServiceSectionInvert>
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </ServiceSectionInvert>
  );
}
