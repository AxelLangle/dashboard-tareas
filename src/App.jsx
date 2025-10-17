import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomePage } from "./HomePage.jsx";
import { TareasPage } from "./TareasPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/Lista">Ver Lista de Tareas</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Lista" element={<TareasPage />} />
        </Routes>
      </div>
    </>

  );
}

export default App;