import { Outlet, Link } from "react-router-dom";

// Layout component with navigation links and an outlet for nested routes
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post User</Link>
          </li>
          <li>
            <Link to="/get">Get All User</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;