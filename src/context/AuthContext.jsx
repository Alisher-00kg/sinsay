import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [path, setPath] = useState("/sign-in");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userData")) || {};
    if (savedUser?.email && savedUser?.password) {
      setPath("/");
    }
  }, []);
  return (
    <AuthContext.Provider value={{ path, setPath }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
