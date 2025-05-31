import React from "react";
import { Pagination } from "react-bootstrap";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface PaginationProps {
  limit?: number;
  page?: number;
  totalPages?: number;
  totalRecords?: number;
  onPageChange: (page: number) => void;
}

const TablePagination: React.FC<PaginationProps> = ({
  limit = 0,
  page = 0,
  totalPages = 0,
  totalRecords = 0,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    const maxPageButtons = 5;
    const halfRange = Math.floor(maxPageButtons / 2);

    let startPage = Math.max(1, page - halfRange);
    let endPage = Math.min(totalPages, page + halfRange);

    if (endPage - startPage + 1 < maxPageButtons) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return { pageNumbers, startPage, endPage };
  };

  const { pageNumbers, startPage, endPage } = getPageNumbers();

  const fromRecord = (page - 1) * limit + 1;
  const toRecord = Math.min(page * limit, totalRecords);

  return totalPages > 1 ? (
    <div className="table-pagination">
      <p className="mb-0">
        Showing {fromRecord}-{toRecord} from {totalRecords}
      </p>
      <Pagination className="mb-0">
        <Pagination.First onClick={() => onPageChange(1)} disabled={page === 1}>
          <FaCaretLeft size={22} />
        </Pagination.First>

        {startPage > 1 && (
          <>
            <Pagination.Item onClick={() => onPageChange(1)}>
              {1}
            </Pagination.Item>
            {startPage > 2 && <Pagination.Ellipsis />}
          </>
        )}

        {pageNumbers.map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === page}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <Pagination.Ellipsis />}
            <Pagination.Item onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </Pagination.Item>
          </>
        )}

        <Pagination.Last
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
        >
          <FaCaretRight size={22} />
        </Pagination.Last>
      </Pagination>
    </div>
  ) : (
    <></>
  );
};

export default TablePagination;
