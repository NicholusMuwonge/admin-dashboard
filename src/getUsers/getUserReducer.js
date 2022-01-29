import {
  CREATE_NEW_USER,
  EDIT_USER,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_UNSUCCESSFUL,
  USERS_LOADING,
  DELETE_USER,
} from "../constants";

let initialUserState = {
  users: [],
  loading: false,
  error: "",
};

const getAllUsersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case USERS_FETCH_SUCCESS:
    case EDIT_USER:
    case CREATE_NEW_USER:
    case DELETE_USER:
      return {
        loading: false,
        users: action.users,
        error: "",
      };
    case USERS_FETCH_UNSUCCESSFUL:
      return {
        loading: false,
        users: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default getAllUsersReducer;
