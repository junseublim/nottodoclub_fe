import { HTMLAttributes } from "react";
import CloseIcon from '@/assets/svgs/icn_close.svg?react'

interface BottomModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const BottomModal = ({ isOpen, onClose, children }: BottomModalProps) => {
  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 transform transition-transform ease-in-out duration-300 rounded-t-xl">
        <div className="flex justify-end h-10">
          <CloseIcon onClick={onClose}/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomModal;  