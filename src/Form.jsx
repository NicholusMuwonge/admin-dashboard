import * as React from "react";
import TextField from "@mui/material/TextField";
import { Paper } from "@material-ui/core";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const formStyles = {
  container: { padding: "1%" },
  toolBarContainer: { flexDirection: "row", display: "flex" },
  tableNameContainer: { flex: 1, display: "flex", alignItems: "center" },
  tableNameStyle: { color: "grey", marginLeft: "2%" },
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
  dividerStyling: { marginTop: "1%", marginBottom: "2%" },
  formStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
  },
  fieldGroupContainer: { display: "flex", width: "98%", marginTop: "2%" },
  fieldLableContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "5%",
  },
  fieldContainer: { display: "flex", flex: 2, alignItems: "center" },
  fieldStyle: { width: "100%" },
  buttonContainer: {
    width: "98%",
    marginTop: "2%",
    textAlign: "right",
    paddingRight: "5%",
  },
  cancelButton: { marginRight: "2%", textTransform: "capitalize" },
  successButton: { textTransform: "capitalize" },
};

export default function UserForm({
  errors,
  handleChange,
  handleSubmit,
  email,
  name,
  city,
  username,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Paper style={formStyles.container}>
        <h3 style={formStyles.tableNameStyle}>Form</h3>
        <Divider style={formStyles.dividerStyling} />
        <Paper
          component="form"
          style={formStyles.formStyle}
          elevation={0}
          noValidate
          autoComplete="off"
        >
          <div style={formStyles.fieldGroupContainer}>
            <div style={formStyles.fieldLableContainer}>
              <h3>Name</h3>
            </div>
            <div style={formStyles.fieldContainer}>
              <TextField
                error={errors["name"]["error"]}
                id="name"
                autoFocus
                name="name"
                helperText={
                  errors["name"]["error"] ? errors["name"]["message"] : ""
                }
                style={formStyles.fieldStyle}
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formStyles.fieldGroupContainer}>
            <div style={formStyles.fieldLableContainer}>
              <h3>Username</h3>
            </div>
            <div style={formStyles.fieldContainer}>
              <TextField
                error={errors["username"]["error"]}
                id="username"
                name="username"
                helperText={
                  errors["username"]["error"]
                    ? errors["username"]["message"]
                    : ""
                }
                style={formStyles.fieldStyle}
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formStyles.fieldGroupContainer}>
            <div style={formStyles.fieldLableContainer}>
              <h3>City</h3>
            </div>
            <div style={formStyles.fieldContainer}>
              <TextField
                error={errors["city"]["error"]}
                id="city"
                name="city"
                helperText={
                  errors["city"]["error"] ? errors["city"]["message"] : ""
                }
                style={formStyles.fieldStyle}
                value={city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formStyles.fieldGroupContainer}>
            <div style={formStyles.fieldLableContainer}>
              <h3>Email</h3>
            </div>
            <div style={formStyles.fieldContainer}>
              <TextField
                error={errors["email"]["error"]}
                id="email"
                name="email"
                type="email"
                value={email}
                helperText={
                  errors["email"]["error"] ? errors["email"]["message"] : ""
                }
                placeholder="nicholus@email.com"
                style={formStyles.fieldStyle}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formStyles.buttonContainer}>
            <Button
              variant="outlined"
              style={formStyles.cancelButton}
              color="error"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              style={formStyles.successButton}
              onClick={handleSubmit}
              disabled={
                !email ||
                !name ||
                errors["email"]["error"] ||
                errors["name"]["error"] ||
                errors["city"]["error"] ||
                errors["username"]["error"]
              }
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Paper>
    </>
  );
}
