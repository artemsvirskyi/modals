import React from 'react';
import { Modal, closeButton, Button } from 'react-bootstrap';

export default ({show, onHide, children}) => {
	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{children}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
};