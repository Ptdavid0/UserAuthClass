import axios from "axios";

const API_KEY = "AIzaSyBFpcyQKFit2onel_THaASpAHr1R6JN03c";
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const createUser = async (email, password) => {
  try {
    const response = await axios.post(URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
