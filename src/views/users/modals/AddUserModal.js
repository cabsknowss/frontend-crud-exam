import React, { useState } from "react";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const AddUserModal = (props) => {
  const { setModal } = props;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(null);
  const [remind, setRemind] = useState(null);

  // Function that creates user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRemind(null);
    const data = {
      email: email,
      avatar: "",
      first_name: firstName,
      last_name: lastName,
    };

    try {
      if (!data.email || !data.first_name || !data.last_name) {
        setRemind("Fill all required input fields");
        return;
      }
      if (!data.email.includes("@")) {
        setRemind("Email must be valid");
        return;
      }
      // POST REQUEST
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`ERROR! Status: ${response.status}`);
      }

      const result = await response.json();
      setError(null);
      setMsg(`User successfully added. ID: ${result.id}`);
    } catch (error) {
      setMsg(null);
      setError(error.message);
    }
  };

  return (
    <div className="action-modal">
      <div className="action-modal__container">
        <h2 className="action-modal__title">Add User</h2>

        <form onSubmit={handleSubmit}>
          <label for="email">
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />

          <label for="fname">
            First name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="fname"
            placeholder="Enter your first name"
            required
          />

          <label for="lname">
            Last name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lname"
            placeholder="Enter your last name"
            required
          />
          <div className="action-modal__remind">
            {remind && <p>{remind}</p>}
          </div>
          <div className="modal-buttons">
            <button type="submit">Submit</button>
            <button type="close" onClick={() => setModal("")}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      {msg && <SuccessModal setModal={setModal} msg={msg} setMsg={setMsg} />}
      {error && (
        <ErrorModal setModal={setModal} error={error} setError={setError} />
      )}
    </div>
  );
};

export default AddUserModal;
