import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 

  const handlePageClick = (page) => {
    if (page === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (typeof page === 'number') {
      setCurrentPage(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    if (currentPage > 1) {
      items.push(
        <Pagination.Prev key="prev" onClick={(page) => handlePageClick('prev')} />
      );
    }
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={(page) => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    if (currentPage < totalPages) {
      items.push(
        <Pagination.Next key="next" onClick={() => handlePageClick('next')} />
      );
    }
    return items;
  };

  return (
    <Pagination>{renderPaginationItems()}</Pagination>
  );
};

export default PaginationComponent;
