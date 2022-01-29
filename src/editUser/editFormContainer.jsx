import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./editUserAction";
import { useNavigate, useParams } from "react-router-dom";
import { useFormValidation } from "../hooks";
import UserForm from "../Form";

export default function EditUsersContainer() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    username: "",
    city: "",
  });
  const { email, name, city, username } = state;
  const dispatch = useDispatch();
  const errors = useFormValidation({ email, name, city, username });
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.allUsers.users);
  const [userFromStore, setUserFromStore] = React.useState(null);

  const { userId } = useParams();
  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    if (parseInt(userId) && parseInt(userId) < allUsers.length) {
      let userRecord =
        allUsers.length &&
        allUsers.filter((user) => user.id === parseInt(userId));
      userRecord.length &&
        setState({
          email: userRecord[0]["email"],
          name: userRecord[0]["name"],
          username: userRecord[0]["username"],
          city: userRecord[0]["city"],
        });
      userRecord.length && setUserFromStore(userRecord[0]);
    } else {
      navigate("/");
    }
  }, [userId, allUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let restOfUsers =
      allUsers.length &&
      allUsers.filter((user) => user.id !== parseInt(userId));

    const updatedUser = userFromStore && { ...userFromStore, ...state };
    let sortedUpdatedArray = [...restOfUsers, updatedUser].sort(
      (a, b) => a.id - b.id
    );
    dispatch(editUser(sortedUpdatedArray));
    setState({});
    navigate("/");
  };
  const formProps= {errors, handleChange, handleSubmit, email, name, city, username};
  return (
    <>
      <UserForm {...formProps}/>
    </>
  );
}
