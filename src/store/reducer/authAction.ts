import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth } from "../../types/IAuth";
import { baseService } from "../../Api/url";
import Cookies from "js-cookie";

interface IUserAuth extends IAuth {
  token: string;
}

export const authUser = createAsyncThunk(
  "user/authUser",
  async (user: { username: string; password: string }) => {
    const response = await baseService.post<IUserAuth>("/user/sign-in", user);
    Cookies.set("token", response.data.token);
    return response.data;
  }
);

export const validationToken = createAsyncThunk(
  "user/validationToken",
  async function (_, thunkAPI) {
    const res = await baseService.get<IAuth>("/user");

    return res.data;
  }
);
