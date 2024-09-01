import React, { useState } from "react";

const AddUser = (props) => {
  const { setModal } = props;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      firstName,
      lastName,
    };
    console.log("handleSubmit");
  };

  return (
    <div className="modal">
      <div className="user-modal-container">
        <h2 className="fw-bold fs-primary-heading padding-bottom-400">
          Add User
        </h2>

        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="you@example.com"
          />

          <label for="fname">First name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="fname"
            placeholder="Enter your first name"
          />

          <label for="lname">Last name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lname"
            placeholder="Enter your last name"
          />

          <div className="form-btns">
            <button type="submit">Submit</button>
            <button type="close" onClick={() => setModal("")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
