// @ts-nocheck
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SavedProfiles from "./pages/SavedProfiles";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PageNotFound from "./pages/PageNotFound";
//import PageNav from "./components/PageNav";
import MainNav from "./components/MainNav";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function ProtectedRoute() {
  const authContext = useContext(AuthContext);

  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("../profiles_data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        /* console.log(data.profiles); */
        setData(data.jobs);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchProfiles();
  }, []);

  const authContext = useContext(AuthContext);
  console.log("authContext: ", authContext);

  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        // Additional actions after sign out, such as redirecting to another page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <BrowserRouter>
      <MainNav
        isAuthenticated={isAuthenticated}
        handleSignOut={handleSignOut}
      />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/SavedProfiles" element={<ProtectedRoute />}>
          <Route path="/SavedProfiles" element={<SavedProfiles />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
