import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Lula from "../assets/imagens/lula.jpeg";
import ViniJr from "../assets/imagens/vini-jr.webp";
import Pipoca from "../assets/imagens/mc-pipokinha-1.webp";
import Vini13 from "../assets/imagens/Viniccius13_2022.webp";
import Zane from "../assets/imagens/image.png";
import John from "../assets/imagens/Untitled-design-2023-11-11T152727.404-800x800.webp";

import { Autoplay, Pagination } from 'swiper/modules';
import Testimonial from './Testimonial';

const ReviewsSection = () => {
  return (
    <section
      className="reviews-section"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto",padding:"0 20px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          O que nossos clientes dizem
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Quem já utilizou de nosso site sabe o quanto nos importamos com os atendimentos. Aqui os agendamentos são rápidos, fáceis e seguros.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            750: { slidesPerView:1},
            1024: { slidesPerView: 3 },
          }}
          
          style={{
            padding: "0 0 0 60px", // Adiciona espaçamento para evitar encostar nas bordas
          }}
        >
          <SwiperSlide>
          <Testimonial img={Lula} text="Meus companheiros, vim aqui dizer que este site é o futuro do nosso Brasil. "
                            stars={4}
                            name="Lula"
                            position="Presidente"
                        />
          </SwiperSlide>

          <SwiperSlide>
          <Testimonial img={ViniJr} text="Tenho um propósito na vida e, 
                        se eu tiver que sofrer mais e mais para que futuras gerações 
                        não passem por situações parecidas, estou pronto e preparado."
                            stars={5}
                            name="Vini Jr"
                            position="Futebolista"
                        />
          </SwiperSlide>

          <SwiperSlide>
            <Testimonial img={Vini13} text="Show de bola! Né Davi?!"
                            stars={4}
                            name="Viniccius 13"
                            position="Engenheiro de Circuitos"
                        />
          </SwiperSlide>

          <SwiperSlide>
          <Testimonial img={Pipoca} text="As pessoas fazem um show, esse site faz espetáculo"
                            stars={3}
                            name="Pipokinha"
                            position="Funkeira"
                        />
          </SwiperSlide>

          <SwiperSlide>
          <Testimonial img={John} text="No atendimento as minhas pacientes sempre elogiam."
                            stars={4}
                            name="John Sins"
                            position="Ginecologista"
                        />
          </SwiperSlide>

          <SwiperSlide>
          <Testimonial img={Zane} text="Deeeeeeeeeeeeee!"
                            stars={4}
                            name="Zane"
                            position="Garoto de Programa"
                        />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
