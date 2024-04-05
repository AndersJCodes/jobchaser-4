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

/* -------------- useContext ----------------------- */

function ProtectedRoute() {
  const authContext = useContext(AuthContext);

  const isAuthenticated = authContext && authContext.user !== null;
  //console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

/* -------------- App component ----------------------- */

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState();

  /* -------------- Fetch ----------------------- */
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("./src/profiles_data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        //console.log(data.profiles);
        setData(data.profiles);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchProfiles();
  }, []);

  /* -------------- Search ----------------------- */

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSearchedProfiles =
    data &&
    data.filter(
      (profile) =>
        profile.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.skills
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        profile.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  /* -------------- Handle sign in ----------------------- */

  const authContext = useContext(AuthContext);
  //console.log("authContext: ", authContext);

  const isAuthenticated = authContext && authContext.user !== null;
  //console.log("isAuthenticated", isAuthenticated);

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

  /* -------------- Component rendering ----------------------- */

  return (
    <BrowserRouter>
      <MainNav
        isAuthenticated={isAuthenticated}
        handleSignOut={handleSignOut}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              searchTerm={searchTerm}
              onSearch={handleSearch}
              onSearchedProfiles={handleSearchedProfiles}
            />
          }
        />
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
