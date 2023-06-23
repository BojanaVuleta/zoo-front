import { API } from "../shared/api";
export const registerUser = (name, email, password) => {
    return API.post("/register", {
      name,
      email,
      password,
    });
  };
  
  export const logIn = (email, password) => {
    return API.post("/login", {
      email,
      password,
    });
  };
  
  export const logOut = () => {
    return API.post("/logout");
  };