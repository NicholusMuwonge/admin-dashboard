import React from "react";
import { cityRegex, emailRegex, nameRegex, usernameRegex } from "./constants";

let emailPrompt =
  "Email is required. Please type a proper email ie username@gmail.com";
let namePrompt = "Name is required. Please type a proper name ie Nicholus Muwonge.";
let usernamePrompt = "Username should countain letter and or a . or an _.";
let cityPrompt =
  "City should countain letters and alphabets and some special characters.";
export const useFormValidation = ({ email, name, city, username }) => {
  const [errors, setErrors] = React.useState({
    name: { error: false, message: namePrompt },
    email: { error: false, message: emailPrompt },
    username: { error: false, message: usernamePrompt },
    city: { error: false, message: cityPrompt },
  });
  React.useEffect(() => {
    if (username) {
      setErrors((state) => ({
        ...state,
        username: {
          message: state.username.message,
          error: !usernameRegex.test(username),
        },
      }));
    }

    if (name || !name) {
      setErrors((state) => ({
        ...state,
        name: { message: state.name.message, error: !nameRegex.test(name) },
      }));
    }

    if (city) {
      setErrors((state) => ({
        ...state,
        city: { message: state.city.message, error: !cityRegex.test(city) },
      }));
    }

    if (email || !email) {
      setErrors((state) => ({
        ...state,
        email: { message: state.email.message, error: !emailRegex.test(email) },
      }));
    }
  }, [email, name, city, username]);

  return errors;
};
