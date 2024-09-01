import React from "react";

const DeleteUser = (props) => {
  const { setModal, userData } = props;
  console.log(userData);

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

      console.log(`User deleted successfully: status ${response.status}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };
  return (
    <div className="modal">
      <div className="user-modal-container">
        <h2 className="fw-bold fs-primary-heading padding-bottom-400">
          Delete User
        </h2>
        <div className="padding-bottom-400">
          <p className="padding-block-300 fw-bold">
            Are you sure you want to delete this user?
          </p>
          <div>
            <p>ID: {userData.id}</p>
            <p>Email: {userData.email}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
          </div>
        </div>
        <div className="form-btns">
          <button onClick={handleDelete} type="delete">
            Delete
          </button>
          <button onClick={() => setModal("")} type="close">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
