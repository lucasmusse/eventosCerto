import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GaleriaLayout } from "./styles";

import imagem1 from "../../../../assets/imagem1.jpeg";
import imagem2 from "../../../../assets/imagem2.jpeg";
import imagem3 from "../../../../assets/imagem3.jpeg";
import imagem4 from "../../../../assets/imagem4.jpeg";
import imagem5 from "../../../../assets/imagem5.jpeg";

const data = [
  { id: "1", image: imagem1 },
  { id: "2", image: imagem2 },
  { id: "3", image: imagem3 },
  { id: "4", image: imagem4 },
  { id: "5", image: imagem5 },
];

export function Galeria() {
  Galeria;
  return (
    <GaleriaLayout id='galeria'>
      
      <h1>Galeria</h1>
        <Swiper slidesPerView={2} pagination={{ clickable: true }} navigation  spaceBetween={20} className="slider">
        
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      
    </GaleriaLayout>
  );
}
