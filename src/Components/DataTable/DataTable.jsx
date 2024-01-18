import './DataTable.css';
import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

const DataTable = ({ data, onCheckboxChange }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [checkedRows, setCheckedRows] = useState(new Set([...Array(5).keys()]));

  const handleCheckboxChange = (rowIndex) => {
    const updatedCheckedRows = new Set(checkedRows);

    if (checkedRows.has(rowIndex)) {
      updatedCheckedRows.delete(rowIndex);
    } else {
      updatedCheckedRows.add(rowIndex);
    }

    setCheckedRows(updatedCheckedRows);
    onCheckboxChange(updatedCheckedRows);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCheckAll = () => {
    setCheckedRows(new Set([...Array(data.length).keys()]));
    onCheckboxChange(new Set([...Array(data.length).keys()]));
  };

  const handleUncheckAll = () => {
    setCheckedRows(new Set());
    onCheckboxChange(new Set());
  };

  const isAllChecked = checkedRows.size === data.length;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><input
        type="checkbox"
        checked={isAllChecked}
        onChange={isAllChecked ? handleUncheckAll : handleCheckAll}
      /></th>
            <th>ID</th>
            <th>Name</th>
            <th>Numeric Value 1</th>
            <th>Numeric Value 2</th>
            <th>Numeric Value 3</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, rowIndex) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedRows.has(rowIndex + indexOfFirstItem)}
                  onChange={() => handleCheckboxChange(rowIndex + indexOfFirstItem)}
                />
              </td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.numericValue1}</td>
              <td>{row.numericValue2}</td>
              <td>{row.numericValue3}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className='pagination'>
        {currentPage !==1 && <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        }
        <Pagination.Item active>{`Page ${currentPage} of ${totalPages}`}</Pagination.Item>
        {currentPage!==totalPages && <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />}
      </Pagination>
    </div>
  );
};

export default DataTable;


