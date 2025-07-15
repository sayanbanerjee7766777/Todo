import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [inputText, setInputText] = useState({});

    const handleInput = (value) => {
      setInputText({id : value , content : value , checked : false})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(inputText)
        setInputText({id:"" ,  content :"" , checked : false})
    }
  return (
    <div>
       <section className="mb-6">
          <form
            className="flex shadow-lg rounded-full overflow-hidden"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="flex-1 px-5 py-3 bg-white/10 text-white placeholder-white/70 focus:outline-none"
              placeholder="Enter your task..."
              value={inputText.content}
              onChange={(e) => handleInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 font-semibold text-white transition-all"
            >
              Add
            </button>
          </form>
        </section>
    </div>
  )
}

export default TodoForm
