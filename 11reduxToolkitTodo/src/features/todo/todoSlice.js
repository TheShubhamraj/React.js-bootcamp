import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    todos: [{ id: 1, text: "Hello word" }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state,action) => { 
            state.todos=state.todos.filter((todo)=>(
                todo.id !== action.payload
            ))

        },
        updateTodo:(state,action) =>{
            state.todos = state.todos.map((prevTodo) =>( prevTodo.id === action.payload.id?action.payload:prevTodo))
        }

    }
});

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;