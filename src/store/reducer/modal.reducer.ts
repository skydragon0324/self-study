import { actionTypes } from "../actions/actionTypes";

interface ModalStateType {
  openModalState: boolean;
}

const initialState: ModalStateType = {
  openModalState: false,
};

const ModalReducer = (state: ModalStateType = initialState, action: ModalStateActionType): ModalStateType => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        openModalState: !state.openModalState, // Update openModalState to true
      };
    default:
      return state;
  }
};

export default ModalReducer;