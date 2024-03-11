import { BannerContainer } from "./styles";

import imageBanner from "../../../../assets/ImageBanner.jpeg";

export function Banner() {
  return (
    <BannerContainer>
      <img src={imageBanner} />
    </BannerContainer>
  );
}
