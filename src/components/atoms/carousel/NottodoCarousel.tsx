import Carousel from "@/components/Carousel";
import NottodoSlide from "./NottodoSlide";

const NottodoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <NottodoSlide
          title="8시 이후 금식"
          description="체중 감량"
          successCount={20}
          duration={32}
        />
      </Carousel.Item>
      <Carousel.Item>
        <NottodoSlide
          title="8시 이후 금식"
          description="체중 감량"
          successCount={20}
          duration={32}
          isDark={true}
        />
      </Carousel.Item>
      <Carousel.Item>
        <NottodoSlide
          title="8시 이후 금식"
          description="체중 감량"
          successCount={20}
          duration={32}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default NottodoCarousel;
