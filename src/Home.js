import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

const Button = ({ children, onClick, className = "" }) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {children}
  </button>
);

function Home() {
  return (
    <div className="container">
      <h1 className="title">Placement Management System</h1>
      <div className="button-group">
        <Link to="/showall">
          <Button>Show All</Button>
        </Link>
        <Link to="/add">
          <Button>Add Placement</Button>
        </Link>
        <Link to="/delete">
          <Button>Delete Placement</Button>
        </Link>
        <Link to="/update">
          <Button>Update Placement</Button>
        </Link>
        <Link to="/choosebyid">
          <Button>Choose by ID</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
