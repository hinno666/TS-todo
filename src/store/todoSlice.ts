import { TodoState } from './../types/data';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
           state.todos.push({
            id: Date.now(),
            title: action.payload,
            complete: false,
           });
        },
        removeTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        completeTodo(state, action: PayloadAction<number>) {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
            if (toggleTodo) {
                toggleTodo.complete = !toggleTodo?.complete;
            }
        }
    }
})

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;