import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/search" />
        </Routes>
        <Routes>
          <Route path="/movies" />
        </Routes>
        <Routes>
          <Route path="/series" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
