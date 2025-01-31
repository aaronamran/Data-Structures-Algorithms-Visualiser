import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, title, children }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className="modal-header">
					<div className="modal-title-container">
						<h2>{title}</h2>
					</div>
					<button className="close-button" onClick={onClose}>
						&times;
					</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
