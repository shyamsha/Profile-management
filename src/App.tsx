import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import ProfileDisplay from "./components/ProfileDisplay";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { ProfileProvider } from "./contexts/ProfileContext";
import { Bounce, ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{ justifyContent: "space-between" }}
      />

      <ProfileProvider>
        <Navbar />
        <Routes>
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/profile" element={<ProfileDisplay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProfileProvider>
      <ToastContainer />
    </>
  );
};

export default App;
