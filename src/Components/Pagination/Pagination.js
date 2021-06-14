import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount,usersPerPage}) => {
	const [pageNumber, setPageNumber] = useState(0);
	const pagesVisited = pageNumber * usersPerPage;
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<div>
			<ReactPaginate
				previousLabel='Previous'
				nextLabel='next'
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'paginationBttns'}
				previousLinkClassName={'previousButton'}
				nextLinkClassName={'nextButton'}
				disabledClassName={'paginationDisabled'}
				activeClassName={'paginationActive'}
			/>
		</div>
	);
};

export default Pagination;
