import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHead } from "@mui/material";
import TablePaginationActionsContainer from "./TablePaginationActionsContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableLoader from "./TableLoader";
const TableDetails = ({
  rowsPerPage,
  page,
  emptyRows,
  rows,
  setDeleteId,
  setOpenDeletePrompt,
}) => {
  const loading = useSelector((state) => state.allUsers.loading);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <TableLoader />
      ) : (
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, key) => (
            <TableRow key={row?.id ?? key}>
              <TableCell scope="row" align="center">
                {row?.id}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="center">
                {row?.name}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="center">
                {row?.username}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="center">
                {row?.email}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="center">
                {row?.city}
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="center">
                <button
                  style={styles.editButtonStyle}
                  title="Edit user"
                  onClick={() => navigate(`user/${row.id}`)}
                >
                  Edit User
                </button>
              </TableCell>
              <TableCell style={styles.tableCellStyle} align="center">
                <button
                  style={styles.deleteButtonStyle}
                  title="Delete user"
                  onClick={() => {
                    setDeleteId(row.id);
                    setOpenDeletePrompt(true);
                  }}
                >
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
  setDeleteId,
  setOpenDeletePrompt,
}) {
  let detailsProps = {
    rowsPerPage,
    page,
    emptyRows,
    rows,
    setDeleteId,
    setOpenDeletePrompt,
  };
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={styles.userTable} aria-label="users table">
          <TableHead>
            <TableRow style={styles.tableRow}>
              <TableCell align="center" style={styles.tableHeaderStyle}>
                Id
              </TableCell>
              <TableCell align="center" style={styles.tableHeaderStyle}>
                Name
              </TableCell>
              <TableCell align="center" style={styles.tableHeaderStyle}>
                Username
              </TableCell>
              <TableCell align="center" style={styles.tableHeaderStyle}>
                Email
              </TableCell>
              <TableCell align="center" style={styles.tableHeaderStyle}>
                City
              </TableCell>
              <TableCell align="center" style={styles.tableHeaderStyle}>
                Edit
              </TableCell>
              <TableCell align="center" style={styles.tableHeaderStyle}>
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
