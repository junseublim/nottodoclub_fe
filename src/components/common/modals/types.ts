import { HTMLAttributes } from "react"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  modalName: string;
}
