import React, { createContext, useState } from "react";
export const ModalContext = createContext({});
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const toggleModal = () => setShowModal((prev) => !prev);
  return (
    <ModalContext.Provider
      value={{
        showModal,
        onOpen: handleOpen,
        onClose: handleClose,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
