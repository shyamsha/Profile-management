import React, { useEffect, useState, memo } from "react";
import { useProfile } from "../contexts/ProfileContext";
import { fetchProfile, deleteProfile } from "../api";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { toast } from "react-toastify";
import ConfirmModal from "./ConfirmModal";

interface Profile {
  name: string;
  email: string;
  age?: number;
}

const ProfileDisplay: React.FC = () => {
  const { profile, setProfile } = useProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      let profileData: Profile | any = localStorage.getItem("profile");
      if (profileData) {
        profileData = JSON.parse(profileData);
        setProfile(profileData);
        return;
      } else {
        try {
          const { data } = await fetchProfile();
          setProfile(data);
          if (profile) toast.success("Profile fetched successfully");
        } catch (error) {
          toast.error("Failed to fetch profile");
        }
      }
    };
    if (!profile) {
      loadProfile();
    }
  }, [profile, setProfile]);

  const confirmDelete = async () => {
    try {
      await deleteProfile();
      toast.success("Profile deleted successfully");
      setIsModalOpen(false);
      history("/profile-form");
      setProfile(null);
    } catch (error) {
      toast.error("Failed to delete profile");
      setIsModalOpen(false);
    }
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  if (!profile) return null;

  return (
    <div>
      {Object.values(profile).length > 0 ? (
        <ProfileCard profile={profile} handleDelete={handleDelete} />
      ) : (
        <p className="text-center">
          No profile found. Please create one.
          <button className="width" onClick={() => history("/profile-form")}>
            {" "}
            Create
          </button>
        </p>
      )}
      <ConfirmModal
        show={isModalOpen}
        title="Delete Profile"
        message="Are you sure you want to delete your profile? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default memo(ProfileDisplay);
