import {TLoginData} from "../types/TLoginData";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {TRegisterData} from "../types/TRegisterData";

const login = createAsyncThunk(
    "auth/login",
    async ({email, password}: TLoginData) => {
        // return apiLogin(email, password);
        //     return Promise.reject('error');
        return Promise.resolve('success login');
    }
);
const register = createAsyncThunk(
    "auth/register",
    async ({email, password, lastName, firstName}: TRegisterData) => {
        // return apiLogin(email, password);
        //     return Promise.reject('error');
        return Promise.resolve('success register');
    });
export {login, register};