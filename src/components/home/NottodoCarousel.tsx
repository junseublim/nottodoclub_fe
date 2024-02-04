import Carousel from "@/components/common/Carousel";
import { Nottodo } from "@/types";
import { memo, useEffect, useState } from "react";

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
  onSelect: (nottodo: Nottodo) => void;
}

const NottodoCarousel = memo(function ({
  nottodos,
  onSelect,
}: NottodoCarouselProps) {
  const defaultBulletClass = "mx-1 inline-block w-2 h-2 rounded-full ";
  const [bulletColor, setBulletColor] = useState("");
  const [activeBulletColor, setActiveBulletColor] = useState("");

  const setPaginationBulletStyle = (index: number) => {
    if (index % 2 === 0) {
      setBulletColor("bg-gray-900/30");
      setActiveBulletColor("bg-gray-900");
    } else {
      setBulletColor("bg-[#FFD12B]/30");
      setActiveBulletColor("bg-[#FFD12B]");
    }
  };

  const onHalfActiveItemChange = (index: number) => {
    setPaginationBulletStyle(index);
  };

  const onCarouselActiveItemChange = (index: number) => {
    onSelect(nottodos[index]);
  };

  return (
    <Carousel
      onActive={onCarouselActiveItemChange}
      onHalfActive={onHalfActiveItemChange}
    >
      <Carousel.ItemContainer>
        {nottodos?.map((nottodo, index) => (
          <Carousel.Item index={index} key={nottodo.id + nottodo.title}>
            <NottodoSlide
              isDark={index % 2 !== 0}
              title={nottodo.title}
              description={nottodo.goal}
              successCount={20}
              duration={32}
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemContainer>
      <>
        {nottodos.length > 1 && (
          <Carousel.Pagination
            wrapperClass="w-full inline-flex absolute top-5 justify-center"
            bulletClass={defaultBulletClass + bulletColor}
            activeBulletClass={defaultBulletClass + activeBulletColor}
          />
        )}
      </>
    </Carousel>
  );
});

export default NottodoCarousel;
