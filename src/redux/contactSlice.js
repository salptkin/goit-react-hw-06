import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, actions) => {
      state.items.push({
        ...actions.payload,
        id: crypto.randomUUID(),
      });
    },
    deleteContact: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
