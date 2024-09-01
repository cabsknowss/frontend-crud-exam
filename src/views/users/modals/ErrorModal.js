import React from "react";

const ErrorModal = (props) => {
  const { error, setError, setModal } = props;

  const handleAgainButton = () => {
    setError(null);
  };
  const handleCancelButton = () => {
    setError(null);
    setModal("");
  };
  return (
    <div className="msg-modal">
      <div className="msg-modal__container">
        <p className="msg-modal__notice">Notice!</p>
        <h2 className="msg-modal__title">{error}</h2>
        <div className="msg-modal__buttons">
          <button
            className="msg-modal__btn"
            onClick={handleAgainButton}
            type="delete"
          >
            Try Again
          </button>
          <button onClick={handleCancelButton}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
