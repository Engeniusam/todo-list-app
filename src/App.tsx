import React, {FC, ChangeEvent,useState} from 'react';
import './App.css';
import {ITask} from './Interfaces'
import TodoTask from './TodoTask';
import Footer from './Footer'

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
   const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
if (event.target.name === "task"){
  setTask(event.target.value);
}else{
  setDeadline(Number(event.target.value));
}
  };

  const addTask = ():void =>{
const newTask = { taskName: task,deadline: deadline };
setTodoList([...todoList, newTask]);
setTask("");
setDeadline(0);
  }

  const completeTask = (taskNameToDelete:string):void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskNameToDelete
    }))
  };


  return (
    <div className="app">
<div className="app__header">
  <div className="app__inputContainer">
  <input name="task" value={task} type="text" placeholder="Task to be done" onChange={handleChange}/>
  <input name="deadline"  value={deadline} type="number" placeholder='Deadline (in Days) ...' onChange={handleChange} />
  </div>
<button onClick={addTask}>Add Task</button>
</div>
<div className="app__todoList">
  {
    todoList.map((task: ITask) =>{
      return <TodoTask task={task} completeTask={completeTask}/>
    })
  }
</div>
<Footer />
    </div>
  );
}

export default App;
