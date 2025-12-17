import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import feedReducer from "../utils/feedSlice";
import connectionReducer from "../utils/connectionsSlice"
const appStore = configureStore({
    reducer:{
        user: useReducer,
        feed: feedReducer,
        connection: connectionReducer,

    },
})

export default appStore;