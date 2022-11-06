import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Error from "./Pages/Error"

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Details />} />
        <Route path="*" element={<Error error="Page Not Found!" />} />
      </Routes>
    </>
  );
};

export default App;
