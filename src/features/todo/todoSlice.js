import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid generates an unique id and thats it ✅

// now we define a initialState because this is the first important thing inside an store ✅
// we can give an "array" or an "object" its totally upto you ✅
const initialState = {
  todos: [],
};

// function sayHellow() {
//   console.log("Hellow World");
// }

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducers is what its like an object which has properties and methods
    // you can declare fucntion outside and call them inside as well
    // addTodo: sayHellow // "addTodo" (property) and function/method is "sayHellow" only give refrence do not call it.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //state.todos = [...state.todos, todo];
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
