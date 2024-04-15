import {
  BrowserRouter,
  Navigate,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainNav from "./components/MainNav";
import SavedProfiles from "./pages/SavedProfiles";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebase-config";
import { Profile } from "./types/types";

/* -------------- useContext ----------------------- */

function ProtectedRoute() {
  const user = useContext<User | undefined>(AuthContext);
  //const isAuthenticated = authContext && authContext.user !== null;
  const isAuthenticated = !!user;
  //console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

/* -------------- App component ----------------------- */

function App() {
  /* fetch states */
  const [data, setData] = useState<Profile[]>([]);

  /* Searchstates */
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedEducation, setSelectedEducation] = useState<string>("");

  const user = useContext(AuthContext);
  const isAuthenticated = !!user;
  //console.log("authContext: ", authContext);
  //console.log("isAuthenticated", isAuthenticated);

  const locationOptions = data && [
    ...new Set(data.map((profile) => profile.location)),
  ];
  const educationOptions = data && [
    ...new Set(data.map((profile) => profile.education)),
  ];

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedLocation(event.target.value);
  };

  const handleEducationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedEducation(event.target.value);
  };

  const filteredProfiles = data.filter((profile) => {
    // Normalize search term and ensure it's lowercased
    const normalizedSearchTerm = searchTerm.toLowerCase();

    // Check if the profile matches the normalized search term in any of the relevant fields
    const matchesSearchTerm = normalizedSearchTerm
      ? profile.fullName.toLowerCase().includes(normalizedSearchTerm) ||
        profile.education.toLowerCase().includes(normalizedSearchTerm) ||
        profile.skills.some((skill) =>
          skill.toLowerCase().includes(normalizedSearchTerm)
        ) ||
        profile.description.toLowerCase().includes(normalizedSearchTerm)
      : true; // If no search term is provided, do not filter out based on it

    // Check if profile matches the selected location (if a location has been selected)
    const matchesLocation = selectedLocation
      ? profile.location === selectedLocation
      : true;

    // Check if profile matches the selected education (if an education has been selected)
    const matchesEducation = selectedEducation
      ? profile.education === selectedEducation
      : true;

    return matchesSearchTerm && matchesLocation && matchesEducation;
  });

  /*   const filteredProfiles =
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
    ); */

  /* -------------- Handle sign in ----------------------- */

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
              filteredProfiles={filteredProfiles}
              locationOptions={locationOptions}
              educationOptions={educationOptions}
              onEducationChange={handleEducationChange}
              onLocationChange={handleLocationChange}
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
