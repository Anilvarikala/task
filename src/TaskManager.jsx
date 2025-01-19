// import React, { useState, useEffect } from "react";
// import "./TaskManager.css"; // Make sure to style your component

// const TaskManager = () => {
//   const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [
//     { id: 1, task: "Check emails and prioritize tasks", date: "January 12, 2026", completed: true },
//     { id: 2, task: "Respond to urgent emails", date: "January 13, 2026", completed: false },
//     { id: 3, task: "Review and update to-do list", date: "January 15, 2026", completed: false },
//     { id: 4, task: "Attend daily stand-up meetings", date: "January 17, 2026", completed: false },
//     { id: 5, task: "Make a daily schedule", date: "January 21, 2026", completed: false },
//   ];

//   const [tasks, setTasks] = useState(initialTasks);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const toggleComplete = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const addTask = (taskName, taskDate) => {
//     const newTask = {
//       id: tasks.length + 1,
//       task: taskName,
//       date: taskDate,
//       completed: false,
//     };
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="task-manager">
//       <div className="task-checklist">
//         <h1>TASK CHECKLIST</h1>
//         <div className="header">
//           <span>PERIOD</span>
//           <span>DATE</span>
//         </div>
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id} className={task.completed ? "completed" : ""}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => toggleComplete(task.id)}
//                 />
//                 {task.task}
//               </label>
//               <span className="date">{task.date}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="add-task">
//           <h2>Add a New Task</h2>
//           <TaskForm onAddTask={addTask} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const TaskForm = ({ onAddTask }) => {
//   const [taskName, setTaskName] = useState("");
//   const [taskDate, setTaskDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (taskName && taskDate) {
//       onAddTask(taskName, taskDate);
//       setTaskName("");
//       setTaskDate("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <input
//         type="text"
//         placeholder="Task Name"
//         value={taskName}
//         onChange={(e) => setTaskName(e.target.value)}
//       />
//       <input
//         type="date"
//         value={taskDate}
//         onChange={(e) => setTaskDate(e.target.value)}
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskManager;

// import React, { useState, useEffect } from "react";
// import "./TaskManager.css";

// const TaskManager = () => {
//   const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [
//     // {
//     //   id: 1,
//     //   task: "Check emails and prioritize tasks",
//     //   date: "2026-01-12",
//     //   completed: true,
//     // },
//     // {
//     //   id: 2,
//     //   task: "Respond to urgent emails",
//     //   date: "2026-01-13",
//     //   completed: false,
//     // },
//     // {
//     //   id: 3,
//     //   task: "Review and update to-do list",
//     //   date: "2026-01-15",
//     //   completed: false,
//     // },
//     // {
//     //   id: 4,
//     //   task: "Attend daily stand-up meetings",
//     //   date: "2026-01-17",
//     //   completed: false,
//     // },
//     // {
//     //   id: 5,
//     //   task: "Make a daily schedule",
//     //   date: "2026-01-21",
//     //   completed: false,
//     // },
//   ];

//   const [tasks, setTasks] = useState(initialTasks);
//   const [editTask, setEditTask] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const toggleComplete = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const addTask = (taskName, taskDate) => {
//     const newTask = {
//       id: tasks.length + 1,
//       task: taskName,
//       date: taskDate,
//       completed: false,
//     };
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const updateTask = (id, updatedTask, updatedDate) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id
//           ? { ...task, task: updatedTask, date: updatedDate }
//           : task
//       )
//     );
//     setEditTask(null);
//   };

//   return (
//     <div className="task-manager">
//       <div className="task-checklist">
//         <h1>TASK MANAGER</h1>
       
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id} className={task.completed ? "completed" : ""}>
//               {editTask === task.id ? (
//                 <TaskForm
//                   onAddTask={(updatedTask, updatedDate) =>
//                     updateTask(task.id, updatedTask, updatedDate)
//                   }
//                   taskName={task.task}
//                   taskDate={task.date}
//                   isEdit
//                 />
//               ) : (
//                 <>
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={task.completed}
//                       onChange={() => toggleComplete(task.id)}
//                     />
//                     {task.task}
//                   </label>
//                   <span className="date">{task.date}</span>
//                   <div className="task-buttons">
//                   <button className="update-button" onClick={() => setEditTask(task.id)}>Update</button>
//                   <button  className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
//                   </div>
                 
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="add-task">
//           <h2>Add a New Task</h2>
//           <TaskForm onAddTask={addTask} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const TaskForm = ({
//   onAddTask,
//   taskName = "",
//   taskDate = "",
//   isEdit = false,
// }) => {
//   const [name, setName] = useState(taskName);
//   const [date, setDate] = useState(taskDate);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && date) {
//       onAddTask(name, date);
//       if (!isEdit) {
//         setName("");
//         setDate("");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <input
//         type="text"
//         placeholder="Task Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <button type="submit">{isEdit ? "Update Task" : "Add Task"}</button>
//     </form>
//   );
// };

// export default TaskManager;



import React, { useState, useEffect } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialTasks);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (taskName, taskDate) => {
    const newTask = {
      id: tasks.length + 1,
      task: taskName,
      date: taskDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask, updatedDate) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, task: updatedTask, date: updatedDate }
          : task
      )
    );
    setEditTask(null);
  };

  return (
    <div className="task-manager">
      <div className="task-checklist">
        <h1>TASK MANAGER</h1>

        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              {editTask === task.id ? (
                <TaskForm
                  onAddTask={(updatedTask, updatedDate) =>
                    updateTask(task.id, updatedTask, updatedDate)
                  }
                  taskName={task.task}
                  taskDate={task.date}
                  isEdit
                />
              ) : (
                <>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                    />
                    {task.task}
                  </label>
                  <span className="date">{task.date}</span>
                  <div className="task-buttons">
                    <button
                      className="update-button"
                      onClick={() => setEditTask(task.id)}
                    >
                      Update
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="add-task">
          <h2>Add a New Task</h2>
          <TaskForm onAddTask={addTask} />
        </div>
      </div>
    </div>
  );
};

const TaskForm = ({
  onAddTask,
  taskName = "",
  taskDate = "",
  isEdit = false,
}) => {
  const [name, setName] = useState(taskName);
  const [date, setDate] = useState(taskDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      onAddTask(name, date);
      if (!isEdit) {
        setName("");
        setDate("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">{isEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskManager;
