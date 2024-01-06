import { HTMLAttributes, useEffect, useState } from "react";
import CloseIcon from '@/assets/svgs/icn_close.svg?react'
import { useModalContext } from "@/hooks";

interface BottomModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const BOTTOM_MODAL = 'BOTTOM_MODAL'

const BottomModal = ({ isOpen, onClose, children }: BottomModalProps) => {
  const {addModal, removeModal} = useModalContext();
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(isOpen)

    if (isOpen) {
      addModal(BOTTOM_MODAL)
    } else {
      removeModal(BOTTOM_MODAL)
    }
  }, [isOpen])

  const onCloseModal = () => {
    removeModal(BOTTOM_MODAL)
    onClose()
  }


  return (
    <div className={`z-50 fixed bottom-0 left-0 right-0 bg-white p-4 transform transition-transform ease-in-out duration-300 rounded-t-xl ${showModal ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-end h-10">
        <CloseIcon onClick={onCloseModal}/>
      </div>
      {children}
    </div>
  );
};

export default BottomModal;  