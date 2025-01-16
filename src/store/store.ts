import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "../store/reducer/postSlice";
import userReducer from "./reducer/authSlice";

export const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //  authReducers
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
