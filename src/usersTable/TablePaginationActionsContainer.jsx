import * as React from "react";
import PropTypes from "prop-types";
import TablePaginationActions from "./TablePaginationActions";

const TablePaginationActionsContainer = (props) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const childProps = {
    count,
    page,
    rowsPerPage,
    handleFirstPageButtonClick,
    handleBackButtonClick,
    handleNextButtonClick,
    handleLastPageButtonClick,
  };
  return <TablePaginationActions {...childProps} />;
};

TablePaginationActionsContainer.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActionsContainer;
