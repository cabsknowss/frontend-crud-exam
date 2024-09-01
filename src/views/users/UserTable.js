import React from "react";
import { Edit, Delete } from "@mui/icons-material";

const UserTable = (props) => {
  const { users, setModal, setUserData, setViewProfile } = props;

  const editUser = (e, user) => {
    e.stopPropagation();
    setModal("Edit User");
    setUserData(user);
  };

  const deleteUser = (e, user) => {
    e.stopPropagation();
    setModal("Delete User");
    setUserData(user);
  };

  return (
    <>
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
          {users.map((user, index) => (
            <>
              <tr key={index} onClick={() => setViewProfile(user)}>
                <th scope="row">{user.id}</th>
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
                    <Edit style={{ color: "white" }} />
                  </div>
                  <div
                    onClick={(e) => deleteUser(e, user)}
                    className="table-action__delete"
                  >
                    <Delete style={{ color: "white" }} />
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
