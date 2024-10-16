import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext";

const Navbar: React.FC = () => {
  const { profile } = useProfile();

  return (
    <nav>
      <div className="topnav">
        <Link className="link" to="/profile-form">
          Profile Form
        </Link>
        <Link className="link" to="/profile">
          Profile
        </Link>
        {profile && <p className="float">{profile.name}</p>}
      </div>
    </nav>
  );
};

export default memo(Navbar);
