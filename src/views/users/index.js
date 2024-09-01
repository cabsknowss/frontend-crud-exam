import React, { useState, useEffect } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import UserTable from "./UserTable";
import LoadingIcon from "./loading-icon.png";

function Index() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState("");
  const [userData, setUserData] = useState(null);

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
        console.log(result.data);
        setUsers(result.data);
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

  if (loading)
    return <img className="loading-icon" src={LoadingIcon} alt="load" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="page-user page-section">
      <div className="page-container">
        <h1 className="page-title">Users</h1>
        <div>
          <button onClick={addUser} type="add">
            Add User
          </button>
        </div>
        <div>
          <UserTable
            setModal={setModal}
            setUserData={setUserData}
            users={users}
          />
        </div>
      </div>

      {modal === "Add User" && <AddUser setModal={setModal} />}
      {modal === "Edit User" && (
        <EditUser userData={userData} setModal={setModal} />
      )}
      {modal === "Delete User" && (
        <DeleteUser userData={userData} setModal={setModal} />
      )}
    </div>
  );
}

export default Index;
