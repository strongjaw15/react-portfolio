import React, { useState } from 'react';

function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{props.children}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;