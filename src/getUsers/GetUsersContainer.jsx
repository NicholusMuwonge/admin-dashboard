import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "./getUserAction";
import GetUsers from "./GetUsers";

const GetUsersContainer = () => {
  const dispatch = useDispatch();
  const usersCentralState = useSelector((state) => state.allUsers);
  useEffect(() => {
    !usersCentralState.users.length && dispatch(fetchAllUsers());
  }, [dispatch, usersCentralState.users]);
  const childProps = { usersCentralState };
  return <GetUsers {...childProps} />;
};

export default GetUsersContainer;
