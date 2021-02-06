import React from "react";

const PaginationComponent = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className="pagination justify-content-center mb-4 mt-5">
            {
                pageNumbers.map(number => (
                    <li key={number} className="page-item"><span className="page-link" onClick={() => paginate(number)}>{number}</span></li>
                ))
            }
        </ul>
    )
}

export {PaginationComponent};