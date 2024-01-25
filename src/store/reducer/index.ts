import { combineReducers } from "redux";

import ModalReducer from "./modal.reducer";
import UserReducer from "./users.reducer";

const rootReducer = combineReducers({
  ModalReducer,
  UserReducer
});

export default rootReducer;