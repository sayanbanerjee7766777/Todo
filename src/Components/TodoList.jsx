import React from "react";

const TodoList = ({ handleDelete, currentVal, id , checked , handleChecked }) => {
  return (
  <li
  key={id}
  className="bg-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
>
  <div className="flex items-center gap-4">
    
    <span className={`text-white text-lg font-medium tracking-wide ${checked ? 'line-through decoration-2 decoration-white' : ''}`}>{currentVal}</span>
  </div>

  <div className="flex gap-3">
    <button 
    className="text-sm bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 px-4 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
    onClick={()=>handleChecked(currentVal)}
    >
      Check
    </button>

    <button
      onClick={() => handleDelete(currentVal)}
      className="text-sm bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 px-4 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      Delete
    </button>
  </div>
</li>

  );
};

export default TodoList;
