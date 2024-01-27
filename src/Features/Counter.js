import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo, rmv_todo } from './CounterSlice';
import './Counter.css'; // Assuming you have a CSS file for styling

function Counter() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.value);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input === null || input.trim() === '') {
            // Optionally, you can show an error message or take other actions
            console.log("Cannot add an empty todo.");
            return;
        }
        else
            dispatch(add_todo({ text: input }));
        setInput('');
    }

    const handleDeleteTodo = (id) => {
        dispatch(rmv_todo({ id }));
    }

    return (
        <div className="counter-container">
            <h2>Todo List</h2>
            <form onSubmit={handleAddTodo} className="todo-form">
                <input
                    type='text'
                    value={input}
                    placeholder='Enter Todo'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>

            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <p>{todo.text}</p>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Counter;
