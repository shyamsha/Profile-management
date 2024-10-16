import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./contexts/ProfileContext";
import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
const ProfileForm = lazy(() => import("./components/ProfileForm"));
const ProfileDisplay = lazy(() => import("./components/ProfileDisplay"));
const Navbar = lazy(() => import("./components/Navbar"));
const NotFound = lazy(() => import("./components/NotFound"));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center">loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
