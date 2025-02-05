import { useState } from "react";
import axios from "axios";

function DeletePlacement() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8080/placement/${id}`);
      setMessage("Placement deleted successfully!");
      setId(""); // Clear the input after successful deletion
    } catch (error) {
      setMessage("Error: Placement not found or couldn't be deleted!");
    }
  };

  return (
    <div className="container">
      <h2>Delete Placement</h2>
      <form onSubmit={handleDelete}>
        <input
          className="input"
          type="number"
          value={id}
          onChange={handleChange}
          placeholder="Enter ID to delete"
          required
        />
        <button className="btn" type="submit">
          Delete Placement
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default DeletePlacement;
