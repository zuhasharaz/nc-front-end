import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.css";

const Topic = () => {
  return (
    <div class="topics">
      <h1>↘️ PICK A TOPIC! ↙️</h1>
      <Link to="/topics/coding/articles">
        <button className="btn btn-secondary">👩🏽‍💻Coding </button>
      </Link>

      <Link to="/topics/cooking/articles">
        {" "}
        <button className="btn btn-secondary">🍽Cooking </button>
      </Link>

      <Link to="/topics/football/articles">
        {" "}
        <button className="btn btn-secondary">⚽️ Football </button>
      </Link>
    </div>
  );
};

export default Topic;
