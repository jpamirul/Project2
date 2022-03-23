import ThreadContainer from "./components/ThreadContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutCovid from "./components/AboutCovid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <h1>COVID DEETS US 2021</h1>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="AboutCovid" />} />

          <Route path="/AboutCovid" element={<AboutCovid />} />

          <Route path="/ThreadContainer" element={<ThreadContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
