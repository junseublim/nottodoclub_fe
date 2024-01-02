import BadgeOutline from "@/assets/svgs/badge_outline.svg?react";
import BadgeSolid from "@/assets/svgs/badge_solid.svg?react";
import { IconProps } from "./types";

const BadgeIcon = ({ isSelected }: IconProps) => {
  return isSelected ? <BadgeSolid /> : <BadgeOutline />;
};

export default BadgeIcon;
