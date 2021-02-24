/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Pagination.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                <strong>{number}</strong>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
