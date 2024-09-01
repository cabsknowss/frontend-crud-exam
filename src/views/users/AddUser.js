import React, { useState } from "react";

const AddUser = (props) => {
  const { setModal } = props;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addedUser, setAddedUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      avatar: "",
      first_name: firstName,
      last_name: lastName,
    };
    try {
      console.log(data);
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
      console.log(`User Created: ${result.id}`);
      console.log(`User Created: ${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <div className="action-modal">
      <div className="action-modal__container">
        <h2 className="action-modal__title">Add User</h2>

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

          <div className="modal-buttons">
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
