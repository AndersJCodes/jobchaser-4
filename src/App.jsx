// @ts-nocheck
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import SavedJobs from "./pages/SavedJobs";

function ProtectedRoute() {
  const authContext = useContext(AuthContext);

  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

function App() {
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
      <PageNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/SavedJobs" element={<ProtectedRoute />}>
          <Route path="/SavedJobs" element={<SavedJobs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
