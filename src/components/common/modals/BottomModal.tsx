import { useEffect, useState } from "react";
import CloseIcon from '@/assets/svgs/icn_close.svg?react'
import { useModalContext } from "@/hooks";
import { ModalProps } from "./types";

const BottomModal = ({ modalName, isOpen, onClose, children }: ModalProps) => {
  const {addModal, removeModal} = useModalContext();
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(isOpen)

    if (isOpen) {
      addModal(modalName)
    } else {
      removeModal(modalName)
    }
  }, [isOpen])

  const onCloseModal = () => {
    removeModal(modalName)
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