import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./usersSlice";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
