import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/UI/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

    console.log("Логин успешен:", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <Containerdiv>
      <Inputdiv>
        <h2>Login</h2>
        <Formdiv onSubmit={handleSubmit}>
          <Emaildiv>
            <label htmlFor="email">Email</label>{" "}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Emaildiv>
          <Passwordiv>
            <label htmlFor="password">Password</label>{" "}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Passwordiv>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <Signin>
            <h4>Forgot your password</h4>
            <Button
              type="submit"
              style={{ width: 174, height: 72, fontSize: 27 }}
            >
              Sign In
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
`;
// Что то пуш болбой атат
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

const Emaildiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    cursor: pointer;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 80px;
    padding-left: 20px;
  }
`;

const Passwordiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    cursor: pointer;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 80px;
    padding-left: 20px;
  }
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
