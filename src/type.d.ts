type userType = {
  userId: number | null;
}

interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean
};

interface customModalType {
  showModal: boolean;
  handleClose: () => void;
  modalHeader: React.ReactNode;
  modalBody: React.ReactNode;
  modalFooter: React.ReactNode;
}

interface ModalStateActionType {
  type: string,
}
