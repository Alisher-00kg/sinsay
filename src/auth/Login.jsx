import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/UI/Button";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { ProductsContext } from "../context/ProductsProvider";

export const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setPath } = useContext(ProductsContext);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Неверный формат email");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру"
      );
      return;
    }
    login(email, password);
    console.log({ email, password });
    setEmail("");
    setPassword("");
    setPath("/");
  };

  return (
    <Containerdiv>
      <Inputdiv>
        <h2>Login</h2>
        <Formdiv onSubmit={handleSubmit}>
          <Authordiv>
            <InputContainer>
              <label htmlFor="email">Email</label>{" "}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Введите ваш email ..."
              />
            </InputContainer>
          </Authordiv>
          <Authordiv>
            <label htmlFor="password">Пароль</label>{" "}
            <InputContainer>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Введите ваш пароль ..."
              />
              <TogglePasswordVisibility
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />} */}
              </TogglePasswordVisibility>
            </InputContainer>
          </Authordiv>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <Signin>
            <h4>Забыли пароль?</h4>
            <Button
              type="submit"
              style={{ width: 174, height: 72, fontSize: 27 }}
            >
              Войти
            </Button>
          </Signin>
        </Formdiv>
      </Inputdiv>
    </Containerdiv>
  );
};

const Containerdiv = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`;

const Inputdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 542px;
  height: 543px;
  gap: 50px;

  h2 {
    font-size: 47px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0%;
  }
`;

const Authordiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    cursor: pointer;
    font-weight: 500;
    font-size: 24px;
  }
`;

const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 80px;
    padding-left: 20px;
    font-size: 24px;
  }
`;

const TogglePasswordVisibility = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const Formdiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const Signin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h4 {
    letter-spacing: 0%;
    font-size: 21px;
    line-height: 120%;
    font-weight: 500;
    cursor: pointer;
  }
`;
