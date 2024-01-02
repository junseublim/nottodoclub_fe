import ListOutline from "@/assets/svgs/list_outline.svg?react";
import ListSolid from "@/assets/svgs/list_solid.svg?react";
import { IconProps } from "./types";

const ListIcon = ({ isSelected }: IconProps) => {
  return isSelected ? <ListSolid /> : <ListOutline />;
};

export default ListIcon;
