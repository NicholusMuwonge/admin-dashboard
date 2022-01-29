import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton, TableHead } from "@mui/material";
import TablePaginationActionsContainer from "./TablePaginationActionsContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const loadingFillers = new Array(7).fill({
  id: "",
  name: "",
  username: "",
  email: "",
  city: "",
});
const TableDetails = ({ rowsPerPage, page, emptyRows, rows }) => {
  const loading = useSelector((state) => state.allUsers.loading);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <TableBody>
          {loadingFillers.map((placeholder, key) => (
            <TableCell key={key} style={styles.tableCellStyle} align="right">
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableBody>
      ) : (
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="right">
                {row.name}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="right">
                {row.username}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="right">
                {row.email}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="right">
                {row.city}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="right">
                <button style={styles.editButtonStyle} title="Edit user" onClick={()=>navigate(`user/${row.id}`)}>
                  Edit User
                </button>
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="right">
                <button style={styles.deleteButtonStyle} title="Delete user">
                  Delete User
                </button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      )}
    </>
  );
};
export default function UsersTableComponent({
  rows,
  emptyRows,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
  page,
}) {
  let detailsProps = { rowsPerPage, page, emptyRows, rows };
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={styles.userTable} aria-label="users table">
          <TableHead>
            <TableRow style={styles.tableRow}>
              <TableCell style={styles.tableHeaderStyle}>Id</TableCell>
              <TableCell align="right" style={styles.tableHeaderStyle}>
                Name
              </TableCell>
              <TableCell align="right" style={styles.tableHeaderStyle}>
                Username
              </TableCell>
              <TableCell align="right" style={styles.tableHeaderStyle}>
                Email
              </TableCell>
              <TableCell align="right" style={styles.tableHeaderStyle}>
                City
              </TableCell>
              <TableCell align="right" style={styles.tableHeaderStyle}>
                Edit
              </TableCell>
              <TableCell align="right" style={styles.tableHeaderStyle}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableDetails {...detailsProps} />
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActionsContainer}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const styles = {
  userTable: { minWidth: 500 },
  tableRow: { backgroundColor: "#f5f5f5" },
  tableHeaderStyle: { fontWeight: "bolder" },
  tableCellStyle: { width: 160 },
  editButtonStyle: {
    backgroundColor: "#eeac57",
    borderWidth: 0,
    padding: "5%",
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "3px",
    cursor: "pointer",
  },
  deleteButtonStyle: {
    backgroundColor: "#d75452",
    borderWidth: 0,
    padding: "5%",
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "3px",
    cursor: "pointer",
  },
};
