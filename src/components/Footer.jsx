import React from "react";
import styled from "styled-components";
import { Icons } from "../assets/icons/icons";
import { Button } from "./UI/Button";

const Footer = () => {
  return (
    <FooterStyled>
      <ArticleStyled>
        <p className="PTag">Contact Us</p>
        <p className="PTag2">+778 456 893 0283</p>
        <p className="PTag2">Sinseybeauty@gmail.com</p>
        <div className="PTag2">
          <div>Monday - Friday</div>
          <div>10:00 am to 17:00 pm</div>
        </div>
        <SpanStyled>
          <Icons.TwitterLogo />
          <Icons.InstagramLogo />
          <Icons.FacebookLogo />
        </SpanStyled>
        <p className="PTag5">© 2025 SINSEY Official. Powered by Shopify</p>
      </ArticleStyled>
      <ArticleStyled2>
        <p className="Ptag_1Art2">Shop</p>
        <a href="#" className="Ptag_2Art2">
          About
        </a>
        <a href="#" className="Ptag_2Art2">
          Product
        </a>
        <a href="#" className="Ptag_2Art2">
          Reviews
        </a>
        <a href="#" className="Ptag_2Art2">
          Contact
        </a>
      </ArticleStyled2>
      <ArticleStyled3>
        <p className="PTag-1Art3">Newsletter</p>
        <StyledForm>
          <input
            type="text"
            placeholder="Enter email"
            style={{
              paddingLeft: "15px",
            }}
          />
          <p className="ptag3">
            Sign up for exclusive offers, original stories, events and more.
          </p>
          <StyledButton type="button">Subscribe</StyledButton>
        </StyledForm>
      </ArticleStyled3>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  width: 86%;
  height: 360px;
  background-color: #cfc9cb;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  padding: 40px 80px;
`;

const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .PTag {
    font-size: 21px;
    line-height: 25.2px;
    color: #000000;
  }
  .PTag2 {
    color: #000000;
    font-size: 16px;
    line-height: 19.2px;
  }
  .PTag5 {
    color: #676869;
    font-size: 14px;
    line-height: 19.6px;
  }
`;

const ArticleStyled2 = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .Ptag_1Art2 {
    color: #000000;
    font-size: 21px;
    line-height: 25.2px;
  }
  .Ptag_2Art2 {
    color: #131313;
    font-size: 16px;
    line-height: 19.2px;
    text-decoration: none;
  }
`;

const ArticleStyled3 = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .PTag-1Art3 {
    color: #171717;
    font-size: 21px;
    line-height: 25.2px;
    font-weight: 400;
  }
  input {
    width: 310px;
    height: 48px;
    padding: 5px 5px;
    border: none;
  }
  ::placeholder {
    color: #171717;
  }
  .ptag3 {
    width: 281px;
    height: 38px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    color: #676869;
  }
  .BtnStyled {
    width: 130px;
    height: 49px;
    border: none;
    padding: 15px 25px;
    color: white;
    background-color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
  }
`;

const SpanStyled = styled.span`
  display: flex;
  gap: 30px;
`;

const StyledButton = styled(Button)`
  width: 139px;
  height: 49px;
  font-size: 16px;
  font-weight: 400;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
