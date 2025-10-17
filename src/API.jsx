import useState from 'react';
import useEffect from 'react';

function TodoApiApp() {
  // 1. El estado inicia como un array vacío
  const [tareas, setTareas] = useState([]);

  // 2. useEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(respuesta => respuesta.json())
      .then(datos => {
        // 3. Se actualiza el estado con los datos de la API
        setTareas(datos);
      });
  }, []); // El array vacío asegura que solo se ejecute una vez

  return (
    <div>
      <h1>Tareas desde una API</h1>
      <ul>
        {/* 4. Se renderiza la lista usando la propiedad correcta */}
        {tareas.map(tarea => (
          <li key={tarea.id}>{tarea.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApiApp;