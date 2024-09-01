import React, { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";

const UserTable = (props) => {
  const { users, setModal, setUserData, setViewProfile } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10; // Allowed data per page
  const totalPages = Math.ceil([...users, ...users].length / rowsPerPage); // Computes how many is the page

  const dataShow = [...users, ...users].slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  ); // A sliced array that will be used in mapping the data

  const editUser = (e, user) => {
    e.stopPropagation();
    setModal("Edit User");
    setUserData(user);
  }; // Popup edit modal and store the details of the user within the clicked row

  const deleteUser = (e, user) => {
    e.stopPropagation();
    setModal("Delete User");
    setUserData(user);
  }; // Popup delete modal and store the details of the user within the clicked row

  return (
    <>
      <div className="table-container">
        <table className="user-table">
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
            {dataShow.map((user, index) => (
              <>
                <tr key={index} onClick={() => setViewProfile(user)}>
                  <td>{user.id}</td>
                  <td className="page-user__table-avatar-cell">
                    <img
                      className="table-avatar"
                      src={user.avatar}
                      alt="avatar"
                    ></img>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td className="table-action">
                    <div
                      onClick={(e) => editUser(e, user)}
                      className="table-action__edit"
                    >
                      <Edit style={{ color: "hsl(0,0%,100%)" }} />
                    </div>
                    <div
                      onClick={(e) => deleteUser(e, user)}
                      className="table-action__delete"
                    >
                      <Delete style={{ color: "hsl(0,0%,100%)" }} />
                    </div>
                  </td>
                </tr>
              </>
            ))}
            {dataShow.length !== 10 &&
              Array.from({ length: 10 - dataShow.length }, (_, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="table-pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          type="pagination"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            type="pagination"
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={i + 1 === currentPage && "active"}
          >
            {i + 1}
          </button>
        ))}
        <button
          type="pagination"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            console.log(currentPage);
          }}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default UserTable;
