import LeftArrow from '@/assets/svgs/chevron_left.svg?react'
import RightArrow from '@/assets/svgs/chevron_right.svg?react'
import { HTMLAttributes } from 'react';

interface ArrowNavigationProp extends HTMLAttributes<HTMLDivElement> {
  label: string,
  onLeftClick: () => void;
  onRightClick: () => void;
}

const ArrowNavigation = ({label, className, onLeftClick, onRightClick, ...props}: ArrowNavigationProp) => {
  return (<div className={`flex ${className}`} {...props}>
    <LeftArrow onClick={onLeftClick} />
    <span className="font-bold px-4">
      { label }
    </span>
    <RightArrow onClick={onRightClick} />
  </div>);
}
 
export default ArrowNavigation