import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const Todo = () => {

  const local = 'taskLocal'
  const [task, setTask] = useState(()=>{
    const getTask  = localStorage.getItem(local);
    if(!getTask) return [];
    return JSON.parse(getTask)
  });

 
  const handleSubmit = (inputText) => {
    if (inputText.content.trim() === "") {
      toast.error("Please Enter a Valid Task");
      return;
    }

    // if (task.includes(inputText.trim())) {
    //   toast.error("Task Already exist");
    //   return;
    // }

    const taskExist = task.find(
      (curTask) => curTask.content.toLowerCase() === inputText.content.trim().toLowerCase()
    );

    if (taskExist) {
      toast.warn("Task IS Already Exist!!!");
      return;
    }

    setTask((prev) => [
      ...prev,
      {
        id: inputText.id,
        content: inputText.content,
        checked: inputText.checked,
      },
    ]);
    toast.success(" Task Added Successfully");
  };


  // Local Storage Set
  
  localStorage.setItem(local, JSON.stringify(task))
  
  // delete Button

  const handleDelete = (currentVal) => {
    const updatedTask = task.filter((curr) => curr.content !== currentVal);
    setTask(updatedTask);
    toast.success("Task Deleted Sucessfully");
  };

  // checked Button

  const handleChecked = (currentVal) => {

    const checkTask = task.map((curTask) => {

      if(curTask.content === currentVal){
        return{...curTask , checked : !curTask.checked}
      }
      else{
        return curTask;
      }
    })

    setTask(checkTask)

  }

  // Clear All Button

  const handleClear = () => {
    setTask([]);
    toast.warn("Clear All The TAsk !!");
  };

  return (
    <section className="min-h-screen min-w-screen flex justify-center items-center bg-gradient-to-r from-rose-700 via-pink-600 to-pink-400 p-6">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-2xl w-full border border-white/30 text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            🌟 Todo List
          </h1>
          <TodoDate />
        </header>

        <TodoForm addTodo={handleSubmit} />

        <section>
          <ul className="space-y-3">
            {task.map((currentVal) => (
              <TodoList
                id={currentVal.id}
                currentVal={currentVal.content}
                checked={currentVal.checked}
                handleDelete={handleDelete}
                handleChecked = {handleChecked}
              />
            ))}
          </ul>
        </section>

        <section className="flex justify-center">
          <button
            className="btn btn-info my-3 text-white rounded-4xl p-5 font-semibold "
            onClick={handleClear}
          >
            Clear All
          </button>
        </section>
      </div>
    </section>
  );
};

export default Todo;
