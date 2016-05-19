const requestBook = (id) => {
	return {
		type: "REQUEST_BOOK",
		id
	}
};

const fetchSuccess = (id, data) => {
	return {
		type: "FETCH_BOOK_SUCCESS",
		id,
		data
	}
};


const fetchError = (id) => {
	return {
		type: "FETCH_BOOK_ERROR",
		id
	}
};

export const selectBook = (id) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'SELECT_BOOK',
			id
		});

		if(getState().bookModal.books[id]){
			return;
		}

		dispatch(requestBook(id));

		fetch(`https://anapioficeandfire.com/api/books/${id}`)
			.then(res => res.json())
			.then(json => {
				dispatch(fetchSuccess(id, json));
			})
			.catch(err => {
				dispatch(fetchError(id));
			});
	}
};