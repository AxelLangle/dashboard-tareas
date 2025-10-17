function Lista(props){
   
    const listaDeTarea = props.tareas.map((tarea, index) => (
    <li key={index}>{tarea} <button onClick={() => props.borrarTarea(index)}>Borrar</button></li>
  ));

  return (
    <ul>{listaDeTarea}</ul>
  );
}

export default Lista;