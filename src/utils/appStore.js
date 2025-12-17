import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import feedReducer from "../utils/feedSlice";
import connectionReducer from "../utils/connectionsSlice"
import requestReducer from "../utils/requestSlice"
const appStore = configureStore({
    reducer:{
        user: useReducer,
        feed: feedReducer,
        connection: connectionReducer,
        request : requestReducer
    },
})

export default appStore;