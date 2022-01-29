export const emailRegex=
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
export const nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
export const usernameRegex = /^[a-zA-Z0-9._]*$/;
export const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
export const USERS_FETCH_SUCCESS="USERS_FETCH_SUCCESS";
export const USERS_FETCH_UNSUCCESSFUL="USERS_FETCH_UNSUCCESSFUL";
export const USERS_LOADING="USERS_FETCH_UNSUCCESSFUL";
export const CREATE_NEW_USER="CREATE_NEW_USER";
export const EDIT_USER="EDIT_USER";
export const DELETE_USER="DELETE_USER";
