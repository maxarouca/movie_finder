import React from 'react';
import Pagination from 'react-js-pagination';

import { Container } from './styles';

interface Props {
    page: number;
    total_pages: number;
    handlePageChange: (pageNumber: number) => void;
}

function PaginationComponent({ page, total_pages, handlePageChange }: Props) {
    return (
        <Container>
            <Pagination
                activePage={page}
                itemsCountPerPage={5}
                totalItemsCount={total_pages}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                prevPageText={``}
                nextPageText={``}
                firstPageText={``}
                lastPageText={``}
            />
        </Container>
    );
}

export default PaginationComponent;
