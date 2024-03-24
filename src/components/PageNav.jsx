import { NavLink } from "react-router-dom";

function PageNav({ isAuthenticated, handleSignOut }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/SignUp">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/SignIn">Sign in</NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/savedJobs">Saved Jobs</NavLink>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;
