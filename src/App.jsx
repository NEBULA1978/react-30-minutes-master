// import React, { Fragment, useState, useRef, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { TodoList } from "./components/TodoList";

// const KEY = "todoApp.todos";

// export function App() {
//   const todoTaskRef = useRef();
//   const [todos, setTodos] = useState([
//     { id: 1, task: "Tarea ", completed: false },
//   ]);

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem(KEY));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(KEY, JSON.stringify(todos));
//   }, [todos]);

//   const toggleTodo = (id) => {
//     const newTodos = [...todos];
//     const todo = newTodos.find((todo) => todo.id === id);
//     todo.completed = !todo.completed;
//     setTodos(newTodos);
//   };

//   const handleTodoAdd = (event) => {
//     const task = todoTaskRef.current.value;
//     if (task === "") return;

//     setTodos((prevTodos) => {
//       return [...prevTodos, { id: uuidv4(), task, completed: false }];
//     });

//     todoTaskRef.current.value = null;
//   };

//   const handleClearAll = () => {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   };

//   return (
//     <Fragment>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
//       <button onClick={handleTodoAdd}>Añadir</button>
//       <button onClick={handleClearAll}>Eliminar</button>
//       <div>
//         Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
//         terminar
//       </div>
//     </Fragment>
//   );
// }

import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";

const KEY = "todoApp.todos";

export function App() {
  // Referencia al input donde se ingresa la nueva tarea
  const todoTaskRef = useRef();
  // Estado para almacenar la lista de tareas
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea ", completed: false },
  ]);

  // Hook useEffect para cargar la lista de tareas almacenada en localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Hook useEffect para almacenar la lista de tareas en localStorage cada vez que se actualice
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  // Función para cambiar el estado de una tarea (completada o no completada)
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // Función para agregar una nueva tarea
  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  // Función para eliminar todas las tareas completadas
  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // Componente que muestra la lista de tareas y permite marcarlas como completadas o no completadas
  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>Añadir</button>
      <button onClick={handleClearAll}>Eliminar</button>
      <div>
        Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>
    </Fragment>
  );
}

// descripcion

// Este es un código escrito en React que implementa una lista de tareas (To-Do List) con funcionalidades básicas, como agregar una tarea, marcar una tarea como completada y eliminar las tareas completadas.

// El estado de la lista de tareas se almacena en el hook useState, que se inicializa con una tarea de ejemplo.

// El hook useEffect se utiliza para cargar la lista de tareas almacenada en localStorage al iniciar la aplicación, y para almacenar la lista de tareas en localStorage cada vez que se actualiza.

// La función toggleTodo cambia el estado de una tarea (completada o no completada), mientras que la función handleTodoAdd agrega una nueva tarea a la lista.

// La función handleClearAll elimina todas las tareas completadas de la lista.

// El componente TodoList muestra la lista de tareas y permite marcarlas como completadas o no completadas.

// En la interfaz de usuario se muestra un campo de entrada de texto para ingresar nuevas tareas, y dos botones: uno para agregar una tarea y otro para eliminar las tareas completadas. También se muestra un mensaje con la cantidad de tareas que quedan por terminar.