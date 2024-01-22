import React, { useState } from 'react';
import './App.css';

import CustomModal from './component/modal/CustomModal';
import ModalHeader from './component/modal/ModalHeader';
import ModalBody from './component/modal/ModalBody';
import ModalFooter from './component/modal/ModalFooter';
import { SearchFilter } from './component/search/SearchFilter';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => {
    setShowModal(false);
  }

  const handleApply = () => {
    console.log("Applied Successfully!");
  }

  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center mx-auto w-3/4 bg-gray-400 h-screen">
        <button
          className="bg-white border-gray-500 border-solid rounded-lg text-gray-700 p-3"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
        <SearchFilter />
      </div>
      <CustomModal 
        showModal = {showModal}
        handleClose={handleClose}
        modalHeader={ <ModalHeader header='Modal Header' /> } 
        modalBody={ <ModalBody bodyContent="This is modal body content" /> }
        modalFooter = { <ModalFooter save="Apply" handleClose={handleClose} handleApply={handleApply} /> } 
      />
    </div>
  );
}

export default App;
