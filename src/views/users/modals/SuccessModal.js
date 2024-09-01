import React from "react";

const SuccessModal = (props) => {
  const { msg, setMsg, setModal } = props;
  const handleContButton = () => {
    setMsg(null);
    setModal("");
  };
  return (
    <div className="msg-modal">
      <div className="msg-modal__container">
        <p className="msg-modal__notice">Notice!</p>
        <h2 className="msg-modal__title">{msg}</h2>
        <div className="msg-modal__buttons">
          <button onClick={handleContButton} type="submit">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
