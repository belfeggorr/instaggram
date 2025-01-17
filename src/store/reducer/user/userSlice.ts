import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthStoreState } from "../../../types/IAuth/IAuthStoreState";
import { authUser, validationToken } from "./userAction";
import { IAuth } from "../../../types/IAuth/IAuth";

const initialState: IAuthStoreState = {
  user: {
    _id: "",
    avatar: "",
    username: "",
  },
  isAuth: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action: PayloadAction<IAuth>) => {
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(
        validationToken.fulfilled,
        (state, action: PayloadAction<IAuth>) => {
          state.user = action.payload;
          state.isAuth = true;
        }
      );
  },
});

export default authSlice.reducer;
