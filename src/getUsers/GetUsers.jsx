import UsersTableContainer from "../usersTable/TableContainer";
import { Paper } from "@material-ui/core";
import { Divider } from "@mui/material";
export const getUsersStyles = {
  container: { padding: "1%" },
  toolBarContainer: { flexDirection: "row", display: "flex" },
  tableNameContainer: { flex: 1, display: "flex", alignItems: "center" },
  tableNameStyle: { color: "grey" },
  newUserButtonContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonStyling: {
    backgroundColor: "#1477d5",
    borderWidth: 0,
    padding: "1.5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "3px",
    cursor: "pointer",
  },
  dividerStyling: { marginTop: "2%", marginBottom: "2%" },
};
const GetUsers = ({ usersCentralState }) => {
  return (
    <>
      <Paper style={getUsersStyles.container}>
        <div style={getUsersStyles.toolBarContainer}>
          <div style={getUsersStyles.tableNameContainer}>
            <h3 style={getUsersStyles.tableNameStyle}>User List</h3>
          </div>
          <div style={getUsersStyles.newUserButtonContainer}>
            <button style={getUsersStyles.buttonStyling}>New User</button>
          </div>
        </div>
        <Divider style={getUsersStyles.dividerStyling} />
        <UsersTableContainer rows={usersCentralState.users} />
      </Paper>
    </>
  );
};

export default GetUsers;
