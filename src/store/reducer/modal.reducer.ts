import * as Actions from "../actions";
import { Action } from "../store";

interface ModalStateType {
  openModalState: boolean;
}

const initialState: ModalStateType = {
  openModalState: false,
};

const ModalReducer = (state: ModalStateType = initialState, action: Action<ModalStateType>): ModalStateType => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {
        ...state,
        openModalState: !state.openModalState,
      };
    default:
      return state;
  }
};

export default ModalReducer;