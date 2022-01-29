import {
    DELETE_USER,
  } from "../constants";

export const deleteUser = (users)=>({
  type: DELETE_USER,
  users
})
