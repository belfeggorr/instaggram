import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../Api/url";

export const postGet = createAsyncThunk("post/postGet", async () => {
  const response = await baseService.post("/posts");
  return response.data;
});
