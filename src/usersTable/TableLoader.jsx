import { TableBody, Skeleton, TableRow, TableCell } from "@mui/material";

const loadingFillers = new Array(7).fill({});
let styles = {
    tableCellStyle: { width: 160 }
}
const TableLoader = () => {
  return (
    <TableBody>
      {loadingFillers.map((placeholder, key) => (
        <TableRow key={key}>
          {loadingFillers.map((filler, id) => (
            <TableCell style={styles.tableCellStyle} align="right" key={id}>
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
export default TableLoader;
