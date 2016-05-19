import React from 'react';
import { connect } from 'react-redux';
import BookModal from '../components/BookModal';

const mapStateToProps = (state) => {
	return {
		show: !!state.bookModal.selectedBook,
		book: state.bookModal.books[state.bookModal.selectedBook]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onHide: () => {
			dispatch({
				type: 'BOOK_MODAL_HIDE'
			});
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps)
(BookModal);