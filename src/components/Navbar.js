import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ topics }) => (
  <nav>
    <ul>
      {topics.map(topic => (
        <li key={topic.slug}>
          <NavLink to={topic.slug}>{topic.name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
