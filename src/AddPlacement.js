import { useState } from "react";
import axios from "axios";

function AddPlacement() {
  const [placement, setPlacement] = useState({
    id: "",
    name: "",
    college: "",
    date: "",
    qualification: "",
    year: "",
  });

  const handleChange = (e) => {
    setPlacement({ ...placement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/placement", placement);
      alert("Placement added successfully!");
      setPlacement({ id: "", name: "", college: "", date: "", qualification: "", year: "" });
    } catch (error) {
      alert("Error adding placement!");
    }
  };

  return (
    <div className="container">
      <h2>Add Placement</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" type="number" name="id" value={placement.id} onChange={handleChange} placeholder="ID" required />
        <input className="input" type="text" name="name" value={placement.name} onChange={handleChange} placeholder="Name" required />
        <input className="input" type="text" name="college" value={placement.college} onChange={handleChange} placeholder="College" required />
        <input className="input" type="text" name="date" value={placement.date} onChange={handleChange} placeholder="Date" required />
        <input className="input" type="text" name="qualification" value={placement.qualification} onChange={handleChange} placeholder="Qualification" required />
        <input className="input" type="text" name="year" value={placement.year} onChange={handleChange} placeholder="Year" required />
        <button className="btn" type="submit">Add Placement</button>
      </form>
    </div>
  );
}

export default AddPlacement;
