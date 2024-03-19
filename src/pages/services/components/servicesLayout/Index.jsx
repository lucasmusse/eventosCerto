import { ServiceSection, ServiceSectionInvert } from "./styles";




export function Service({ text, img }) {
  
  return (
    <ServiceSection>
      <img src={img} alt="" />
      <p>{text}</p>
    </ServiceSection>
  );
}

export function ServiceInvert({ text, img }) {
  return (
    <ServiceSectionInvert>
      <img src={img} alt="" />
      <p>{text}</p>
    </ServiceSectionInvert>
  );
}
