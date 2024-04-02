"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleUpdateTodo = (event) => {
    event.preventDefault();
    if (editedTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editedTodo;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditedTodo("");
    }
  };

  const handleDeleteClick = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl  px-2 py-3">Todo List</h1>
          <button
            type="submit"
            className="text-black px-2 py-3"
            onClick={() => setShowInput((prev) => !prev)}
          >
            <FaPlus />
          </button>
        </div>
        {showInput && (
          <input
            type="text"
            placeholder="Input Your Todos Here"
            value={newTodo}
            onChange={handleInputChange}
            className="border-b-2 border-black p-2 w-full"
          />
        )}
      </form>
      <div>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li className="bg-gray-200 py-2 px-3 mt-2" key={index}>
                <div className="flex justify-between">
                  {todo}
                  <input
                    type="checkbox"
                    onClick={() => handleDeleteClick(index)}
                  ></input>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="bg-gray-200 py-2 px-3 mt-2">No todos yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
