import HomeOutline from "@/assets/svgs/home_outline.svg?react";
import HomeSolid from "@/assets/svgs/home_solid.svg?react";
import { IconProps } from "./types";

const HomeIcon = ({ isSelected }: IconProps) => {
  return isSelected ? <HomeSolid /> : <HomeOutline />;
};

export default HomeIcon;
