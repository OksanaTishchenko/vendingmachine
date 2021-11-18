import { combineReducers } from "redux";
import { goodsReducer } from "./goods";
import { userReducer } from "./user.js";

export const rootReducer = combineReducers({
  goods: goodsReducer,
  user: userReducer,
})
