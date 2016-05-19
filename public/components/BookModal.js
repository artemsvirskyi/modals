import React from 'react';
import Modal from './Modal';
import Book from './Book';

const FetchingBook = ({ book }) => {
	if(!book){
		return <div></div>;
	}

	if(book.isFetching){
		return <div>Fetching...</div>;
	}

	if(book.isError){
		return <div>Error</div>;
	}

	return (<Book {...book.data}/>);
};

export default ({ show, onHide, book }) => {
	return (
		<Modal show={show} onHide={onHide}>
			<FetchingBook book={book}/>
		</Modal>
	)
};