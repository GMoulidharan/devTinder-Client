import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import feedReducer from "../utils/feedSlice";
const appStore = configureStore({
    reducer:{
        user: useReducer,
        feed: feedReducer,
    },
})

export default appStore;