import { actionTypes } from "./actionTypes";

export const changeModalState = () : ModalStateActionType => ({
  type: actionTypes.OPEN_MODAL,
});