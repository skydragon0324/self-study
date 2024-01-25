import * as Actions from "../actions";
import { Action } from "../store";

const initialState : UserStateType = {
  users: []
};

const UserReducer = (state: UserStateType = initialState, action: Action<UserStateType>): UserStateType => {
  switch (action.type) {
    case "CHANGE_USERS":
      console.log("action",action.payload)
      return {...state, users: action.payload.users}
    default:
      return state;
  }
}

export default UserReducer;