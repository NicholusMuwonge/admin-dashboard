import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./deleteUserAction";
import DeletePrompt from "./DeletePrompt";

export default function DeletePromptContainer({ userId, open, handleClose }) {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers.users);

  const handleDelete = (e) => {
    e.preventDefault();
    const updatedUserList = allUsers.filter(
      (user) => user.id !== parseInt(userId)
    );
    const userWithUpdatedIds =
      updatedUserList.length &&
      updatedUserList.map((user) => {
        if (user.id > parseInt(userId)) {
          user.id = parseInt(user.id) - 1;
        }
        return user;
      });
      userWithUpdatedIds.length && dispatch(deleteUser(userWithUpdatedIds));
    handleClose();
  };
  const deletePromptProps = { open, handleClose, handleDelete };
  return <DeletePrompt {...deletePromptProps} />;
}
