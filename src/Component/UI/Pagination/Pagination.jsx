import React from 'react';
import clas from './Pagination.module.css'
import {usePagination} from "../../../Hooks/usePagination";

const Pagination = ({totalPages,changePage,page}) => {
    const pagesArray = usePagination(totalPages)
    return (
        <div className={clas.wrapBtn}>
            {pagesArray.map(p =>
                <span
                    onClick={() => {changePage(p)}}
                    key={p}
                    className={page === p ? `${clas.page__current} + ${clas.page}` : clas.page}>
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;