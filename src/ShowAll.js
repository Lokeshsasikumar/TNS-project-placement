import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function ShowAll() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/placement").then((response) => {
      setPlacements(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">All Placements</h1>
      <div className="grid">
        {placements.map((placement) => (
          <div key={placement.id} className="card">
            <p><strong>ID:</strong> {placement.id}</p>
            <p><strong>Name:</strong> {placement.name}</p>
            <p><strong>College:</strong> {placement.college}</p>
            <p><strong>Date:</strong> {placement.date}</p>
            <p><strong>Qualification:</strong> {placement.qualification}</p>
            <p><strong>Year:</strong> {placement.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAll;
