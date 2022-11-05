import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
