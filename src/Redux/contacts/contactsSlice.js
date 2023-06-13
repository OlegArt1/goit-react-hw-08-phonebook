import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state =>
{
    state.isLoading = true;
    state.error = null;
};
const handleRejected = (state, action) =>
{
    state.isLoading = false;
    state.error = action.payload;
};
const contactsSlise = createSlice({
    name: "contacts",
    initialState:
    {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
    {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) =>
            {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) =>
            {
                state.items.unshift(action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) =>
            {
                const index = state.items.findIndex(task => task.id === action.payload.id);
                state.items.splice(index, 1);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logOut.fulfilled, state =>
            {
                state.items = [];
                state.error = null;
                state.isLoading = false;
            });
    },
});
export const contactsReduser = contactsSlise.reducer;