import { createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice.js";
import { createSelector } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const selectFilter = (state) => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export default slice.reducer;
