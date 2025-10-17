import { useState } from "react";

function ListaDeTareas() {
    const [tareas, setTareas] = useState(['Lavar la ropa', 'Pasear al perro', 'Aprender react', 'Darle las gracias a Gemini']);

    const [texto, setText] = useState("")

    const ManejarCambios = (e) => {
        setText(e.target.value);
    }

    const agregarTarea = () => {
        setTareas([
            ...tareas, texto
        ])
        setText("");
    };

    return (
        <div>
            <input type="text" name="NuevaTarea" placeholder="Ingresa una Nuvea tarea" value={texto} onChange={ManejarCambios}  />
            <button onClick={agregarTarea}>Agregar Tarea a la Lista</button>
            <br />
            <ul>
                {tareas.map((tarea, index) => <li key ={index}>{tarea}</li>)}
            </ul>
        </div>
    );
}