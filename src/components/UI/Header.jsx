import React, { useContext, useEffect, useState } from "react";
import { Icons } from "../../assets/icons/icons";
import IconButton from "./IconButton";
import styled, { keyframes } from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "./Modal";
import { useAuth } from "../../context/AuthContext";
import { ProductsContext } from "../../context/ProductsProvider";
import { motion } from "framer-motion";
import { useMenu } from "../../context/MenuContext";
import SnackBar from "./SnackBar";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    x: -20,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const Header = () => {
  const { path, setPath } = useAuth();
  const { isOpen, toggleMenu } = useMenu();
  const { state, inputVisible, setInputvisible } = useContext(ProductsContext);
  const totalBasketAmount = state.basket.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const totalFavoritesAmount = state.favorites.reduce(
    (acc, item) => acc + (item.amount || 1),
    0
  );
  const { toggleModal, showModal } = useContext(ModalContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const text = "SINSAY";
  return (
    <StyledHeader>
      <ContainerHeader>
        <IconButton onClick={() => path !== "/sign-in" && setPath("/")}>
          {<Icons.Logo />}
        </IconButton>

        <motion.h4
          variants={container}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          style={{
            display: "flex",
            gap: "5px",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.h4>

        <ContainerIconsBtn>
          <Icons.HeaderLoupe onClick={() => setInputvisible(!inputVisible)} />
          <Icons.HeaderProfile onClick={toggleModal} />
          <IconWithBadge>
            <Icons.HeaderHeart
              onClick={() => path !== "/sign-in" && setPath("/favorite")}
            />
            {path !== "/sign-in" && totalFavoritesAmount > 0 && (
              <StyledBadge>{totalFavoritesAmount}</StyledBadge>
            )}
          </IconWithBadge>
          <IconWithBadge>
            <Icons.HeaderBag
              onClick={() => path !== "/sign-in" && setPath("/cart")}
            />
            {path !== "/sign-in" && totalBasketAmount > 0 && (
              <StyledBadge>{totalBasketAmount}</StyledBadge>
            )}
          </IconWithBadge>
          <IconBurgerMenu onClick={toggleMenu} />
        </ContainerIconsBtn>
      </ContainerHeader>
      {showModal && (
        <Modal>
          <ModalContent>
            <StyledP>Profile</StyledP>
            <StyledP>My account</StyledP>
            <StyledP
              onClick={() => {
                setPath("/sign-in");
                toggleModal();
                localStorage.removeItem("userData");
              }}
            >
              Logout
            </StyledP>
          </ModalContent>
        </Modal>
      )}
      {isOpen && <SnackBar />}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 97.25%;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  padding-left: 3.75%;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 18px;
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 10px;
  text-align: left;
  cursor: pointer;
`;
const ContainerHeader = styled.div`
  width: 90%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 89px;
  border-bottom: 2px solid rgb(0, 0, 0);
`;
const IconBurgerMenu = styled(Icons.BurgerMenu)`
  width: 34px;
  height: 25px;
  margin-left: 20px;
`;

const ContainerIconsBtn = styled(IconButton)`
  display: flex;
  gap: 50px;
`;
const IconWithBadge = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  position: relative;
`;

const StyledBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const AnimatedSideBar = keyframes`
//   from{
// transform: translateX(0px);
//   }
//   to{
// transform: translateX(100%);
//   }
// `;
// const StyledSnackBar = styled(SnackBar)`
//   animation: ${AnimatedSideBar} 5s ease-in-out;
// `;
export default Header;
