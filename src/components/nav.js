import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.css";
import "./nav.css";

const Navigation = () => {
  return (
    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome to NC News</h1>
          <div className="buttonnav">
            <NavLink to="/topics">
              {" "}
              <Button color="info">Home</Button>{" "}
            </NavLink>
            <NavLink to="/articles">
              <Button color="danger">All Articles</Button>
            </NavLink>

            <NavLink to="/users">
              <Button colour="info"> Users </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
