import { useState } from "react";
import Lista from "./Lista.jsx";
import "./TareasPage.css";

export function TareasPage() {
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

    const borrarTarea = (index) => {
        const nuevaLista = tareas.filter((_, i) => i !== index);
        setTareas(nuevaLista);
    };

    return (
        <div className="tareas-container">
            <h1>Lista de Tareas</h1>
            <input className="tareas-container input"
                type="text"
                placeholder="Ingresa una nueva tarea"
                value={texto}
                onChange={manejarCambios}
            />
            <button className="tareas-container button" onClick={agregarTarea}>Agregar</button>
            <Lista tareas={tareas} borrarTarea={borrarTarea} />
        </div>
    )

}

export default TareasPage;