import {
  USERS_FETCH_SUCCESS,
  USERS_LOADING,
  USERS_FETCH_UNSUCCESSFUL,
} from "../constants";

export const handleUserLoading = (loadingState) => ({
  type: USERS_LOADING,
  loading: loadingState,
});
export const handleSuccessfullUsersFetch = (users) => ({
  type: USERS_FETCH_SUCCESS,
  users,
});
export const handleUnsuccessfullUsersFetch = (error) => ({
  type: USERS_FETCH_UNSUCCESSFUL,
  error,
});

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(handleUserLoading(true));
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    );
    const jsonifiedResponse = await response.json();
    const jsonifiedResponseCopy = [...jsonifiedResponse];
    const users = jsonifiedResponseCopy.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
    }));
    dispatch(handleUserLoading(false));
    dispatch(handleSuccessfullUsersFetch(users));
  } catch (err) {
    dispatch(handleUserLoading(false));
    if (err.message.includes("timeout") || err.message === "Network Error") {
      dispatch(
        handleUnsuccessfullUsersFetch(
          "Your request timed out. Please refresh and try again."
        )
      );
    } else {
      dispatch(
        handleUnsuccessfullUsersFetch("There was a problem fetching all users.")
      );
    }
  }
};
