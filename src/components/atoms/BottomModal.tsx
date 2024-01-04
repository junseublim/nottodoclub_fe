import { HTMLAttributes, useEffect, useState } from "react";
import CloseIcon from '@/assets/svgs/icn_close.svg?react'

interface BottomModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const BottomModal = ({ isOpen, onClose, children }: BottomModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowModal(isOpen)
      setTimeout(() => { setShowAnimation(isOpen) }, 300)
    } else {
      setShowAnimation(isOpen)
      setTimeout(() => { setShowModal(isOpen) }, 300)
    }
  }, [isOpen])



  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${showModal ? 'block' : 'hidden'}`}>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${showAnimation ? 'opacity-50 block' : 'opacity-0 hidden'}`}
        onClick={onClose}
      ></div>
      <div className={`fixed bottom-0 left-0 right-0 bg-white p-4 transform transition-transform ease-in-out duration-300 rounded-t-xl ${showAnimation ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-end h-10">
          <CloseIcon onClick={onClose}/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomModal;  