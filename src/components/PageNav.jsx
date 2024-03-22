import { Link, NavLink } from "react-router-dom";

function PageNav() {
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
      </ul>
    </nav>
  );
}

export default PageNav;
