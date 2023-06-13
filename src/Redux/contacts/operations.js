import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, { rejectWithValue }) =>
{
    try
    {
        const response = await axios.get("/contacts");
  
        return response.data;
    }
    catch (e)
    {
        return rejectWithValue(e.message);
    }
});
export const addContact = createAsyncThunk("contacts/addContact", async (subscriber, { rejectWithValue }) =>
{
    try
    {
        const response = await axios.post(`/contacts`, subscriber);
  console.log(`Response ${response.data}   ${subscriber}`);
        return response.data;
    }
    catch (e)
    {
        return rejectWithValue(e.message);
    }
});
/*
    export const redactContact = createAsyncThunk("contacts/redactContact", async (data, { rejectWithValue }) =>
    {
        try
        {
            const response = await axios.patch(`/contacts/${data.id}`,
            {
                name: data.name,
                number: data.number,
            });
            return response.data;
        }
        catch (e)
        {
            return rejectWithValue(e.message);
        }
    });
*/
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, { rejectWithValue }) =>
{
    try
    {
        const response = await axios.delete(`/contacts/${id}`);
  
        return response.data;
    }
    catch (e)
    {
        return rejectWithValue(e.message);
    }
});