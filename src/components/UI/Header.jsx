import React, { useContext } from "react";
import { Icons } from "../../assets/icons/icons";
import IconButton from "./IconButton";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "./Modal";
import { useAuth } from "../../context/AuthContext";
import { ProductsContext } from "../../context/ProductsProvider";

export const Header = () => {
  const { path, setPath } = useAuth();
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
  return (
    <StyledHeader>
      <ContainerHeader>
        <IconButton onClick={() => path !== "/sign-in" && setPath("/")}>
          {<Icons.Logo />}
        </IconButton>
        <StyledH4>Sinsay</StyledH4>

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
          <IconBurgerMenu />
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
const StyledH4 = styled.h4`
  font-size: 36px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
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
