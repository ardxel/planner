import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "../../entities/planner/model";

export const store = configureStore({
  reducer
});


