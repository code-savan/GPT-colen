import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prompt from "./Pages/Prompt";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/prompt" element={<Prompt />} />
      </Routes>
    </Router>
  );
};

export default App;