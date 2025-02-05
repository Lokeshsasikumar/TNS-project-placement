import { useState } from "react";
import axios from "axios";

function UpdatePlacement() {
  const [id, setId] = useState("");
  const [placement, setPlacement] = useState({
    name: "",
    college: "",
    date: "",
    qualification: "",
    year: "",
  });

  const handleChange = (e) => {
    setPlacement({ ...placement, [e.target.name]: e.target.value });
  };

  const fetchPlacement = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/placement/${id}`);
      setPlacement(response.data);
    } catch (error) {
      alert("Placement not found!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/placement/${id}`, placement);
      alert("Placement updated successfully!");
    } catch (error) {
      alert("Error updating placement!");
    }
  };

  return (
    <div className="container">
      <h2>Update Placement</h2>
      <input className="input" type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID" required />
      <button className="btn" onClick={fetchPlacement}>Fetch Placement</button>

      {placement.name && (
        <form onSubmit={handleSubmit}>
          <input className="input" type="text" name="name" value={placement.name} onChange={handleChange} placeholder="Name" required />
          <input className="input" type="text" name="college" value={placement.college} onChange={handleChange} placeholder="College" required />
          <input className="input" type="text" name="date" value={placement.date} onChange={handleChange} placeholder="Date" required />
          <input className="input" type="text" name="qualification" value={placement.qualification} onChange={handleChange} placeholder="Qualification" required />
          <input className="input" type="text" name="year" value={placement.year} onChange={handleChange} placeholder="Year" required />
          <button className="btn" type="submit">Update Placement</button>
        </form>
      )}
    </div>
  );
}

export default UpdatePlacement;
