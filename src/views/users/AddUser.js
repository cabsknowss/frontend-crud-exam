import React from "react";

const AddUser = (props) => {
  const { setModal } = props;
  return (
    <div className="user-modal-container">
      <h2>Testing</h2>
      <button onClick={() => setModal("")}>Close</button>
    </div>
  );
};

export default AddUser;
