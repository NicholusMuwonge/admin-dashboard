import {
    EDIT_USER,
  } from "../constants";

export const editUser = (users)=>({
  type: EDIT_USER,
  users
})
