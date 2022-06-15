import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken("");
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
