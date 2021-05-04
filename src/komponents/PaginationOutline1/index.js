import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import "./styles.css"

export default function PaginationOutline1(props) {
  const handleChange = (event, value) => {
    props.setPage(value);
  };

  return (
    <div className="pagination-styles">
      <Pagination
        count={props.count}
        variant="outlined"
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
}
