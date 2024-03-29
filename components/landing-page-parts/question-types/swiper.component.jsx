import SwiperCore, {
  Navigation,
  EffectCoverflow,
  Pagination,
  A11y,
  Autoplay,
} from "swiper";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/question-types.module.css";
import { BsCheck2 } from "react-icons/bs";

const SwiperComponent = ({ items }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, EffectCoverflow, Pagination, A11y]}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      speed={1000}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      className="shadow bg-light"
      effect={"coverflow"}
      loop={true}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.title} className="h-auto">
            <Container className="bg-white p-5 h-100">
              <h3 className="display-6">{item.title}</h3>
              <div
                className={`${styles.slide} d-flex flex-column justify-content-center`}
              >
                <div className="text-start">
                  {item.options.map((option) => {
                    return (
                      <p key={option} className="lead mt-3">
                        <span className="me-2">
                          <BsCheck2 />
                        </span>
                        <span>{option}</span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </Container>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
