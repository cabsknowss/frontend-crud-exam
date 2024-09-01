import React, { useState, useEffect } from "react";
import AddUserModal from "./modals/AddUserModal";
import EditUserModal from "./modals/EditUserModal";
import DeleteUserModal from "./modals/DeleteUserModal";
import UserTable from "./UserTable";
import LoadingIcon from "./loading-icon.png";
import ProfileModal from "./modals/ProfileModal";

function Index() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState("");
  const [userData, setUserData] = useState(null);
  const [viewProfile, setViewProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let page = 1;
        let morePages = true;
        let data = [];

        while (morePages) {
          const response = await fetch(
            `https://reqres.in/api/users?page=${page}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const result = await response.json();
          data = data.concat(result.data);

          if (result.page >= result.total_pages) {
            morePages = false;
          } else {
            page++;
          }
        }
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [modal]);

  const addUser = () => {
    setModal("Add User");
  };

  if (loading)
    return <img className="loading-icon" src={LoadingIcon} alt="load" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="page-user page-section">
      <div className="page-container">
        <div className="page-user__header">
          <h1 className="page-title">Users</h1>
          <button onClick={addUser} type="add">
            Add User
          </button>
        </div>

        <div>
          <UserTable
            setModal={setModal}
            setUserData={setUserData}
            users={users}
            setViewProfile={setViewProfile}
          />
        </div>
      </div>

      {modal === "Add User" && <AddUserModal setModal={setModal} />}
      {modal === "Edit User" && (
        <EditUserModal userData={userData} setModal={setModal} />
      )}
      {modal === "Delete User" && (
        <DeleteUserModal userData={userData} setModal={setModal} />
      )}
      {viewProfile && (
        <ProfileModal
          viewProfile={viewProfile}
          setViewProfile={setViewProfile}
        />
      )}
    </div>
  );
}

export default Index;
