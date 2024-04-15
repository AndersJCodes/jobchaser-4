import { NavLink, Link } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";

interface MainNavProps {
  isAuthenticated: boolean;
  handleSignOut: () => void; // Assuming handleSignOut doesn't take any arguments
}

function MainNav({ isAuthenticated, handleSignOut }: MainNavProps) {
  return (
    <header className="border-b border-gray-300 p-4 w-full">
      <div className="flex justify-between max-w-7xl mx-auto min-w-96 w-full">
        <img src="../src/assets/jr-dev-icon.svg" className="mr-6" />
        <nav className="flex justify-between w-full">
          <ul className="text-base text-gray-600 flex">
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/SavedJobs"
                  className="px-5 font-semibold hover:text-orange-600"
                >
                  Saved profiles
                </NavLink>
              </li>
            )}
          </ul>
          <div>
            {isAuthenticated ? (
              <button
                className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 border rounded"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <div className="flex">
                <button className="flex items-center gap-1 px-5 hover:text-orange-600">
                  <FaUserGroup />
                  <Link className=" font-semibold" to="/SignUp">
                    Sign up
                  </Link>
                </button>

                <button>
                  <Link
                    className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 border rounded"
                    to="/SignIn"
                  >
                    Sign in
                  </Link>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
