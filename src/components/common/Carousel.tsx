import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
  children: React.ReactElement<CarouselItemProps> | React.ReactElement < CarouselItemProps > [];
}

const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 8000 }),
  ]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  return <div className="flex-[0_0_100%] min-w-0">{children}</div>;
};

Carousel.Item = CarouselItem;

export default Carousel;
