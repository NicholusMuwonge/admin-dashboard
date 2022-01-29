import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormValidation } from "../hooks";
import UserForm from "../Form";
import { addUser } from "./addUserAction";

export default function AddUsersContainer() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    username: "",
    city: "",
  });
  const { email, name, city, username } = state;
  const dispatch = useDispatch();
  let errors = useFormValidation({ email, name, city, username });
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.allUsers.users);
  const [emailTaken, setEmailTaken] = React.useState(false);
  let emailTakenPrompt = "This email is already taken.";
  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = allUsers.filter((user) => user.email === email);
    if (userExists.length) {
      setEmailTaken(true);
      setTimeout(() => setEmailTaken(false), 1000);
      return;
    }
    let userObj = { ...state };
    userObj["id"] = allUsers[allUsers.length - 1]["id"] + 1;
    dispatch(addUser([...allUsers, userObj]));
    setState({});
    navigate("/");
  };
  const formProps = {
    errors,
    handleChange,
    handleSubmit,
    email,
    name,
    city,
    username,
    emailTaken,
    emailTakenPrompt,
  };
  return (
    <>
      <UserForm {...formProps} />
    </>
  );
}
