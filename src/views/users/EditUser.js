import React from "react";

const EditUser = (props) => {
  const { setModal } = props;
  return (
    <div className="user-modal-container">
      <h2>Edit User</h2>
      <button onClick={() => setModal("")}>Close</button>
    </div>
  );
};

export default EditUser;
