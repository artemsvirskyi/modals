import React from 'react';
import BookModal from '../containers/BookModal';
import { connect } from 'react-redux';
import { selectBook } from '../actions/';

const books = [1, 2, 3];
const characters = [1, 2, 3];

const App = React.createClass({
	onBookClick(id){
		this.props.dispatch(selectBook(id));
	},
	onCharacterClick(id){
		console.log('character', id);
	},
	render(){
		return (
			<div>
				<h1>Game of Thrones</h1>

				<h2>Books</h2>

				{books.map(item.bind(null, this.onBookClick))}

{/*				<h2>Characters</h2>

				{characters.map(item.bind(null, this.onCharacterClick))}*/}

				<BookModal />
			</div>
		)
	}
});

const item = (onClick, id) => {
	return (
		<button key={id} onClick={onClick.bind(null, id)}>{id}</button>
	)
};

export default connect()(App);