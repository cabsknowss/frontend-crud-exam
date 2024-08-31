import React, { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

function Index() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        // console.log(result.data);
        setUserData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const addUser = () => {
    setModal("Add User");
  };
  const editUser = () => {
    setModal("Edit User");
  };
  const deleteUser = () => {
    setModal("Delete User");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="page-user">
      <div className="page-main__container">
        <h1 className="page-main__title">Users</h1>
        <div className="margin-block-400">
          <button onClick={() => addUser()} className="page-user__add-user-btn">
            Add User
          </button>
        </div>
        <div className="page-user__table-container">
          <table className="page-user__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td className="page-user__table-avatar-cell">
                    <img
                      className="page-user__table-avatar-img"
                      src={user.avatar}
                      alt="avatar"
                    ></img>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td className="page-user__table-action">
                    <div
                      onClick={() => editUser()}
                      className="page-user__table-action-edit"
                    >
                      <Edit style={{ color: "white" }} />
                    </div>
                    <div
                      onClick={() => deleteUser()}
                      className="page-user__table-action-delete"
                    >
                      <Delete style={{ color: "white" }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modal === "Add User" && <AddUser setModal={setModal} />}
      {modal === "Edit User" && <EditUser setModal={setModal} />}
      {modal === "Delete User" && <DeleteUser setModal={setModal} />}
    </div>
  );
}

export default Index;
