import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoState: [{id: 1, text: "Hello world"}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            };
            state.todoState.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todoState = state.todoState.filter(
                todo => todo.id !== action.payload
            );
        },
        updateTodo: (state, action) => {
            state.todoState = state.todoState.forEach(
                (todo) => {
                    if (todo.id == action.payload.id) {
                        todo.text = action.payload.text;
                    }
                }
            );
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;

