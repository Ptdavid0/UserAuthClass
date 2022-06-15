import axios from "axios";

const API_KEY = "AIzaSyBFpcyQKFit2onel_THaASpAHr1R6JN03c";

export const authentificate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const { idToken } = response.data;

  return idToken;
};

export const createUser = (email, password) => {
  return authentificate("signUp", email, password);
};

export const loginUser = (email, password) => {
  return authentificate("signInWithPassword", email, password);
};
