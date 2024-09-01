import React from "react";
import { Close } from "@mui/icons-material";

const ProfileModal = (props) => {
  const { viewProfile, setViewProfile } = props;
  return (
    <div className="profile-modal">
      <div className="profile-modal__container">
        <div>
          <img src={viewProfile.avatar} alt="avatar" />
        </div>
        <div className="profile-modal__details">
          <p className="profile-modal__name">
            {viewProfile.first_name} {viewProfile.last_name}
          </p>
          <p>
            <span className="fw-bold">ID: </span>
            {viewProfile.id}
          </p>
          <a href={`mailto:${viewProfile.email}`}>
            <p className="profile-modal__email">{viewProfile.email}</p>
          </a>
        </div>
        <div
          onClick={() => setViewProfile(null)}
          className="profile-modal__closebtn"
        >
          <Close />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
