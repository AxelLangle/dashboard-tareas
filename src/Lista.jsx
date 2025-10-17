function Lista(props){
   
    const listaDeTarea = props.tareas.map((tarea, index) => (
    <li key={index}>{tarea}</li>
  ));

  return (
    <ul>{listaDeTarea}</ul>
  );
}

export default Lista;