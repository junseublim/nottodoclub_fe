import React from "react";
import BackIcon from "@/assets/svgs/icn_back.svg?react";
import CloseIcon from "@/assets/svgs/icn_close.svg?react";

interface TopNavProps {
  showBackButton?: boolean;
  showCloseButton?: boolean;
  title: string;
}

const TopNav = ({ showBackButton, showCloseButton, title }: TopNavProps) => {
  return (
    <nav className="text-black p-4 flex justify-between items-center border-b-2">
      <div className="flex items-center">
        {showBackButton && (
          <div className="cursor-pointer">
            <BackIcon />
          </div>
        )}
      </div>

      <div className="text-lg font-bold">{title}</div>

      <div className="flex items-center">
        {showCloseButton && (
          <div className="cursor-pointer ml-2">
            <CloseIcon />
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
