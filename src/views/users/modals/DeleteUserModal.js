import React, { useState } from "react";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const DeleteUserModal = (props) => {
  const { setModal, userData } = props;

  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://reqres.in/api/users/${userData.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`ERROR! Status: ${response.status}`);
      }

      // const result = await response.json();
      setError(null);
      setMsg("User Account is Deleted");
    } catch (error) {
      setMsg(null);
      setError(`Error: ${error.message}`);
    }
  };
  return (
    <div className="action-modal">
      <div className="action-modal__container">
        <h2 className="action-modal__title">Delete User</h2>
        <div>
          <p>Are you sure you want to delete this user?</p>
          <div className="action-modal-delete__details">
            <p>ID: {userData.id}</p>
            <p>Email: {userData.email}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={handleDelete} type="delete">
            Yes
          </button>
          <button onClick={() => setModal("")} type="close">
            Cancel
          </button>
        </div>
      </div>
      {msg && <SuccessModal setModal={setModal} msg={msg} setMsg={setMsg} />}
      {error && (
        <ErrorModal setModal={setModal} error={error} setError={setError} />
      )}
    </div>
  );
};

export default DeleteUserModal;
