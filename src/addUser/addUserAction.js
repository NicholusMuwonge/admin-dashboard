import {
    CREATE_NEW_USER,
  } from "../constants";

export const addUser = (users)=>({
  type: CREATE_NEW_USER,
  users
})
