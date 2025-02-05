import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ShowAll from "./ShowAll";
import AddPlacement from "./AddPlacement";
import UpdatePlacement from "./UpdatePlacement";
import DeletePlacement from "./DeletePlacement";
import GetPlacementById from "./GetPlacementById";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showall" element={<ShowAll />} />
        <Route path="/add" element={<AddPlacement />} />
        <Route path="/update" element={<UpdatePlacement />} />
        <Route path="/delete" element={<DeletePlacement />} />
        <Route path="/choosebyid" element={<GetPlacementById />} />
      </Routes>
    </Router>
  );
}

export default App;
