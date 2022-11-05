import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
