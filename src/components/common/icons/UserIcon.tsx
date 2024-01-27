import UserOutline from "@/assets/svgs/user_outline.svg?react";
import UserSolid from "@/assets/svgs/user_solid.svg?react";
import { IconProps } from "./types";

const UserIcon = ({ isSelected }: IconProps) => {
  return isSelected ? <UserSolid /> : <UserOutline />;
};

export default UserIcon;
