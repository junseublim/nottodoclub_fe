import { useModalContext } from "@/hooks";
import { HTMLAttributes, useEffect, useState } from "react";

interface CenterModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const CENTER_MODAL = 'CENTER_MODAL'

const CenterModal = ({ isOpen, children }: CenterModalProps) => {
  const {addModal, removeModal} = useModalContext();
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(isOpen)

    if (isOpen) {
      addModal(CENTER_MODAL)
    } else {
      removeModal(CENTER_MODAL)
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