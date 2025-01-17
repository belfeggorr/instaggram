import { createSlice } from "@reduxjs/toolkit";
import { postGet } from "./postAction";
import { IPostStoreState } from "../../../types/IPost/IPostStoreState";

const initialState: IPostStoreState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postGet.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export default postSlice.reducer;
