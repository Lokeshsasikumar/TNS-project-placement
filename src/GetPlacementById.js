import { useState } from "react";
import axios from "axios";

function GetByIdPlacement() {
  const [id, setId] = useState("");
  const [placement, setPlacement] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleGetById = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/placement/${id}`);
      setPlacement(response.data);
      setMessage("");
    } catch (error) {
      setMessage("Error: Placement not found!");
      setPlacement(null);
    }
  };

  return (
    <div className="container">
      <h2>Get Placement by ID</h2>
      <form onSubmit={handleGetById}>
        <input
          className="input"
          type="number"
          value={id}
          onChange={handleChange}
          placeholder="Enter ID to fetch placement"
          required
        />
        <button className="btn" type="submit">
          Get Placement
        </button>
      </form>

      {message && <p>{message}</p>}

      {placement && (
        <div className="placement-box">
          <h3>Placement Details</h3>
          <p><strong>ID:</strong> {placement.id}</p>
          <p><strong>Name:</strong> {placement.name}</p>
          <p><strong>College:</strong> {placement.college}</p>
          <p><strong>Date:</strong> {placement.date}</p>
          <p><strong>Qualification:</strong> {placement.qualification}</p>
          <p><strong>Year:</strong> {placement.year}</p>
        </div>
      )}
    </div>
  );
}

export default GetByIdPlacement;
