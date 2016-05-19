import { combineReducers } from 'redux';

const book = (book = {}, action) => {
	switch(action.type){
		case 'REQUEST_BOOK':
			return {
				isFetching: true
			}
		case 'FETCH_BOOK_SUCCESS':
			return {
				data: action.data
			}
		case 'FETCH_BOOK_ERROR':
			return {
				isError: true
			}
	}
};

const books = (books = {}, action) => {
	switch(action.type){
		case 'REQUEST_BOOK':
		case 'FETCH_BOOK_SUCCESS':
		case 'FETCH_BOOK_ERROR':
			return {
				...books,
				[action.id]: book(books[action.id], action)
			}
		default:
			return books;
	}
};

const selectedBook = (state = null, action) => {
	if(action.type === 'SELECT_BOOK'){
		return action.id;
	}

	if(action.type === 'BOOK_MODAL_HIDE'){
		return null;
	}

	return state;
};

export default combineReducers({
	books,
	selectedBook
});