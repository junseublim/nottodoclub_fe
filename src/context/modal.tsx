import { createContext, useEffect, useState } from "react";

export interface IModalContext {
  showModal: boolean;
  addModal: (modalName: string) => void;
  removeModal: (modalName: string) => void;
}

export const ModalContext = createContext<IModalContext| null>(null)

export default function ModalContextProvider({ children }: {children: JSX.Element| JSX.Element[]}) {
  const [modals, setModals] = useState<string[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false)

  const addModal = (modalName: string) => {
    setModals(modals => {
      if (modals.includes(modalName)) return modals
      return [...modals, modalName]
    })
  }

  const removeModal = (modalName: string) => {
    if (!modals.includes(modalName)) return
    setModals(modals => {
      return modals.filter(modal => modal !== modalName)
    })
  }

  useEffect(() => {
    setShowModal(modals.length > 0)
    console.log(modals)
  }, [modals])

  const contextValue = {showModal, addModal, removeModal}

  return <ModalContext.Provider value={contextValue}>
    <div className={`w-full h-full z-40 fixed inset-0 bg-black opacity-50 transition-opacity duration-200 ${showModal ? 'opacity-50 block' : 'opacity-0 hidden'}`}/>
    {children}
  </ModalContext.Provider>
}