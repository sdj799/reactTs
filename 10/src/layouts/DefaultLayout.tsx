import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog/1">Blog</Link>
          </li>
        </ul>
      </header>
      <main>
        <h1>main area</h1>
        <Outlet />
      </main>
      <footer>
        <h1>footer area</h1>
      </footer>
    </>
  );
};
export default DefaultLayout;
