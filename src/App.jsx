import { useState } from "react";
import  Lista  from "./Lista.jsx";

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
  );
}

export default App;