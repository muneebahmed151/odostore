// import {Firebase} 
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseProvider } from './components/config/firebase.jsx';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/config/firebase.jsx";

import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import MyList from "./components/pages/MyList.jsx";
import Deals from "./components/pages/Deals";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import Contact from "./components/pages/Contact";
import Listing from "./components/pages/Listing"; // Add this import
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <>
    <FirebaseProvider>
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
      />

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/" element={
          <PrivateRoute user={user}>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/My-List" element={
          <PrivateRoute user={user}>
            <MyList />
          </PrivateRoute>
        } />
        <Route path="/deal" element={
          <PrivateRoute user={user}>
            <Deals />
          </PrivateRoute>
        } />
        <Route path="/categories" element={
          <PrivateRoute user={user}>
            <Categories />
          </PrivateRoute>
        } />
        <Route path="/about" element={
          <PrivateRoute user={user}>
            <About />
          </PrivateRoute>
        } />
        <Route path="/contact" element={
          <PrivateRoute user={user}>
            <Contact />
          </PrivateRoute>
        } />
        <Route path="/listing" element={
          <PrivateRoute user={user}>
            <Listing />
          </PrivateRoute>
        } />
      </Routes>
      </FirebaseProvider>
    </>
  );
}

export default App;