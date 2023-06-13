import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

const setAuthHeader = token =>
{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const cleanAuthHeader = () =>
{
    axios.defaults.headers.common.Authorization = '';
};
export const registration = createAsyncThunk("auth/register", async (register, thunkAPI) =>
{
    try
    {
        const response = await axios.post("/users/signup", register);

        setAuthHeader(response.data.token);

        return response.data;
    }
    catch (error)
    {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) =>
{
    try
    {
        const response = await axios.post("/users/login", user);
  
        setAuthHeader(response.data.token);
  
        return response.data;
    }
    catch (error)
    {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const logOut = createAsyncThunk("auth/logout", async (user, { rejectWithValue }) =>
{
    try
    {
        await axios.post("/users/logout", user);
    
        cleanAuthHeader();
    }
    catch (e)
    {
        return rejectWithValue(e.message);
    }
});
export const refreshUser = createAsyncThunk("auth/refreshUser", async (_, { getState, rejectWithValue }) =>
{
    const { token } = getState().auth;

    token && setAuthHeader(token);

    try
    {
        const response = await axios.get("/users/current");
  
        return response.data;
    }
    catch (e)
    {
        return rejectWithValue(e.message);
    }
});