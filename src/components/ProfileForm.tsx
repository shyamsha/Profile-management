import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProfile, updateProfile } from "../api";
import { useProfile } from "../contexts/ProfileContext";
import "../App.css";
import { toast } from "react-toastify";

type ProfileFormValues = {
  name: string;
  email: string;
  age?: number;
};

const ProfileForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>();
  const { profile, setProfile } = useProfile();
  const history = useNavigate();

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      if (profile) {
        await updateProfile(data);
        localStorage.setItem("profile", JSON.stringify(data));
        toast.success("Profile updated successfully");
      } else {
        await createProfile(data);
        localStorage.setItem("profile", JSON.stringify(data));
        toast.success("Profile created successfully");
      }
      setProfile(data);
      history("/profile");
    } catch (error) {
      toast.error("Failed to submit profile");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mr">
          <label>Name: </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            defaultValue={profile?.name}
          />
          {errors.name && (
            <p>Name is required and should be at least 3 characters.</p>
          )}
        </div>
        <div className="mr">
          <label>Email: </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            defaultValue={profile?.email}
          />
          {errors.email && <p>Valid email is required.</p>}
        </div>
        <div className="mr">
          <label>Age: </label>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
            defaultValue={profile?.age}
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
