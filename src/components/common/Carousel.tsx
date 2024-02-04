import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

interface CarouselProps {
  children:
    | React.ReactElement<CarouselItemProps>
    | React.ReactElement<CarouselItemProps>[];
  onSelect: (index: number) => void;
}

const Carousel = ({ children, onSelect }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => onSelect(emblaApi.selectedScrollSnap()));
    }
  }, [emblaApi]);

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
