import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/UI/Button";

export const Input = () => {
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
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Emaildiv>
          <Passwordiv>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Passwordiv>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <Signin>
            <h4>Forgot your password</h4>
            <Button type="submit" style={{ width: 144, height: 50 }}>
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
    height 600px;
    display:flex;
    align-items:center;
    justify-content:center;
    // gap:123;
    `;
const Inputdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 542px;
  height: 543px;
  gap: 50px;
`;
const Emaildiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  label {
    cursor: pointer;
    font-weight: 500;
  }
  input {
    width: 100%;
    height: 80px;
  }
`;
const Passwordiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  label {
    cursor: pointer;
    font-weight: 500;
  }
  input {
    width: 100%;
    height: 80px;
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
    font-weight: 500;
    cursor: pointer;
  }
`;
