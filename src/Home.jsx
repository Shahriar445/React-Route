import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./sidebar";
const Home = () => {
  return (
    <>
      <h1>im from home</h1>

      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>test 2</li>
        </ul>
      </nav>
    </>
  );
};
export default Home;
