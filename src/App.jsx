import { useState } from "react";
import Lista from "./Lista.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [tareas, setTareas] = useState([
    'Lavar la ropa',
    'Pasear al perro',
    'Aprender React'
  ]);

  const [texto, setTexto] = useState("");

  const manejarCambios = (e) => {
    setTexto(e.target.value);
  };

  const agregarTarea = () => {
    setTareas([...tareas, texto]);
    setTexto("");
  };

  return (
    <>
      <div>
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={texto}
          onChange={manejarCambios}
        />
        <button onClick={agregarTarea}>Agregar</button>
        <Lista tareas={tareas} />
      </div>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/Lista">Ver Lista de Tareas</Link>
        </nav>
        
        <hr />

        <Routes>
          <Route path="/" element={<h1>Bienvenido a la lista de tareas</h1>} />
          <Route path="/Lista" element={<Lista tareas={tareas} />} />
        </Routes>
      </div>
    </>

  );
}

export default App;