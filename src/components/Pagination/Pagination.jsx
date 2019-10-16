import React from 'react';
import { inject, observer } from "mobx-react";
import ReactPaginate from 'react-paginate';
import { withRouter } from "react-router";

import './pagination.css';

@inject('filmsStores')
@observer
class Pagination extends React.Component {

    handlePageClick = ( page ) => {
        const selectedPage = page.selected + 1;
        this.props.filmsStores.gettingMovie(selectedPage);
        this.props.history.push(`/page/${selectedPage}`);
    }

    render() {
        const { totalPages } = this.props.filmsStores;
        const { page } = this.props.match.params;
        return(
            <div className="paginationPage">
                <ReactPaginate
                    previousLabel={'previous'}
                    initialPage={!page ? 0 : page - 1 }
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={ totalPages }
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    disableInitialCallback
                />
            </div>
        )
    }
}

export default withRouter(Pagination);