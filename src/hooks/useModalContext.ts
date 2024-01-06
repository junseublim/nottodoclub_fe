import { IModalContext, ModalContext } from "@/context/modal"
import { useContext } from "react"

export const useModalContext = () => useContext(ModalContext) as IModalContext