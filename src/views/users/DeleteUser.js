import React from "react";

const DeleteUser = (props) => {
  const { setModal } = props;
  return (
    <div className="user-modal-container">
      <h2>delete user</h2>
      <button onClick={() => setModal("")}>close</button>
    </div>
  );
};

export default DeleteUser;
