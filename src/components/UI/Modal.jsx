import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

export const Modal = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.getElementById("modal")
  );
};
const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 38%;
  right: 0;
  bottom: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow:  0px 0px 0px 4px  rgba(0, 0, 0, 0.1)
`;
