import { NavLink, Link } from "react-router-dom";

function MainNav({ isAuthenticated, handleSignOut }) {
  return (
    <header className="border-b border-gray-300 py-2">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <span>LiaDev</span>
        <nav className="flex items-center w-auto">
          <ul className="text-base text-gray-600 flex">
            <li>
              <NavLink
                to="/"
                className="px-5 font-semibold hover:text-cyan-600"
              >
                Home
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/SavedJobs"
                  className="px-5 font-semibold hover:text-cyan-500"
                >
                  Saved profiles
                </NavLink>
              </li>
            )}
          </ul>
          {isAuthenticated ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <>
              <Link
                className="px-5 font-semibold hover:text-cyan-500"
                to="/SignUp"
              >
                Sign up
              </Link>

              <button>
                <Link
                  className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 border rounded"
                  to="/SignIn"
                >
                  Sign in
                </Link>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
