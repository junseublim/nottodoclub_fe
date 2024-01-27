import { useModalContext } from "@/hooks";
import { useEffect, useState } from "react";
import { ModalProps } from "./types";

const CenterModal = ({ isOpen, children, modalName }: ModalProps) => {
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



  return (
    <div className={`z-50 fixed top-0 w-full h-full flex justify-center items-center ${showModal ? 'block opacity-100' : 'hidden opacity-0'}`}>
      <div className={`w-3/5 bg-white p-4 transform transition-transform ease-in-out duration-200 rounded-xl`}>
        {children}
      </div>
    </div>
  );
};

export default CenterModal;  