import React, { memo } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

interface Profile {
  name: string;
  email: string;
  age?: number;
}

interface Props {
  profile: Profile;
  handleDelete: () => void;
}
function ProfileCard({ profile, handleDelete }: Props) {
  const history = useNavigate();
  return (
    <div>
      <div className="card">
        <div>
          <p className="title">Name: {profile.name}</p>
          <p className="title">Email: {profile.email}</p>
          <p className="title">Age: {profile.age || " No Age provided"}</p>
          <div className="container">
            <button onClick={() => history("/profile-form")}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileCard);
