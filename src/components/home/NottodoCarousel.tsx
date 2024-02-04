import Carousel from "@/components/common/Carousel";
import { Nottodo } from "@/types";

interface NottodoSlideProps {
  title: string;
  description: string;
  successCount: number;
  duration: number;
  isDark?: boolean;
}

const NottodoSlide = ({
  title,
  description,
  successCount,
  duration,
  isDark = false,
}: NottodoSlideProps) => {
  const bgClass = isDark ? "bg-gray-900" : "bg-primary";
  const textClass = isDark ? "text-gray-0" : "text-gray-900";
  const challengeInfoBgClass = isDark ? "bg-primary" : "bg-gray-0";

  return (
    <div
      className={`${bgClass} w-full h-64 flex flex-col justify-center items-center`}
    >
      <span className={`${textClass} text-[24px] font-bold`}>{title}</span>
      <span className={`${textClass} text-base my-1`}>{description}</span>
      <span
        className={`${challengeInfoBgClass} mt-2 py-1 px-2 border-[1px] border-gray-900 rounded-md`}
      >
        <span className="font-bold">총 {successCount}일 성공</span>
        <span>| 도전 {duration}일 차</span>
      </span>
    </div>
  );
};

interface NottodoCarouselProps {
  nottodos: Nottodo[];
  onSelect: (index: number) => void;
}

const NottodoCarousel = ({ nottodos, onSelect }: NottodoCarouselProps) => {
  return (
    <Carousel onSelect={onSelect}>
      {nottodos?.map((nottodo, index) => (
        <Carousel.Item key={nottodo.id + nottodo.title}>
          <NottodoSlide
            isDark={index % 2 !== 0}
            title={nottodo.title}
            description={nottodo.goal}
            successCount={20}
            duration={32}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default NottodoCarousel;
