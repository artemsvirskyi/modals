import React from 'react';

export default ({ name, isbn, numberOfPages, publisher, country }) => {
	return (
		<div>
			<div><b>name:</b> {name}</div>
			<div><b>isbn:</b> {isbn}</div>
			<div><b>numberOfPages:</b> {numberOfPages}</div>
			<div><b>publisher:</b> {publisher}</div>
			<div><b>country:</b> {country}</div>
		</div>
	)
};