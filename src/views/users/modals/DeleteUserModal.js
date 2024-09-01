import React, { useState } from "react";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const DeleteUserModal = (props) => {
  const { setModal, userData } = props;

  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);

  // Function that deletes user
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
      setMsg("User successfully deleted");
    } catch (error) {
      setMsg(null);
      setError(error.message);
    }
  };
  return (
    <div className="action-modal">
      <div className="action-modal__container">
        <h2 className="action-modal__title">Delete User</h2>
        <div>
          <p>Are you sure you want to delete this user?</p>
          <div className="action-modal-delete__details">
            <div>
              <img
                className="action-modal-delete__avatar"
                src={userData.avatar}
                alt="avatar"
              />
            </div>
            <div>
              <p className="action-modal-delete__name">
                {userData.first_name} {userData.last_name}{" "}
                <span className="action-modal-delete__id">
                  (ID: {userData.id})
                </span>
              </p>

              <p className="action-modal-delete__email">{userData.email}</p>
            </div>
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
