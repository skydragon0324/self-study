import React, { Component, useState } from "react";
import { Modal } from "react-overlays";
import ModalFooter from "./ModalFooter";


interface customModalType {
  showModal: boolean;
  handleClose: () => void;
  modalHeader: React.ReactNode;
  modalBody: React.ReactNode;
  modalFooter: React.ReactNode;
}

const rederBackdrop = (props: any) => (
  <div
    className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black opacity-50"
    {...props}
  />
);

const CustomModal: React.FC<customModalType> = (props) => {
  const { showModal, handleClose, modalHeader, modalBody, modalFooter } = props;

  const handleApply = () => {
    console.log("Apply successfully!");
  };

  return (
    <Modal
      className="fixed w-1/3 z-50 top-1/4 left-1/3 bg-white border-solid border-gray-600 border-2 rounded-lg shadow-slate-600 p-4" 
      show={showModal}
      onHide={handleClose}
      renderBackdrop={rederBackdrop}
    >
      <>
        { modalHeader }
        { modalBody }
        { modalFooter }
        </>
    </Modal>
  );
};

export default CustomModal;
