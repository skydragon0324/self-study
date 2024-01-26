import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';

import { StateInterface, store } from './store/store';
import CustomModal from './component/modal/CustomModal';
import ModalHeader from './component/modal/ModalHeader';
import ModalBody from './component/modal/ModalBody';
import ModalFooter from './component/modal/ModalFooter';
import { SearchFilter } from './component/search/SearchFilter';
import Users from './component/list/Users';


function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => {
    setShowModal(false);
  }

  const openModal = () => {
    dispatch({
      type: "OPEN_MODAL"
    })
  }

  const [search, setSearch] = useState<number | null>(null);

  const handleApply = () => {
    console.log("Applied Successfully!");
  }

  const { openModalState } = useSelector<StateInterface, ModalStateType>(
    (state) => state.ModalReducer
  );
  const dispatch : Dispatch<any> = useDispatch();

  
  console.log("openstate", openModalState)
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center mx-auto w-3/4 bg-gray-400 h-max">
        <button
          className="bg-white border-gray-500 border-solid rounded-lg text-gray-700 p-3"
          onClick={openModal}
        >
          Open Modal
        </button>
        <SearchFilter />
        <Users userId = {search} />
      </div>
      <CustomModal 
        showModal = {openModalState}
        handleClose={openModal}
        modalHeader={ <ModalHeader header='Modal Header' /> } 
        modalBody={ <ModalBody bodyContent="This is modal body content" /> }
        modalFooter = { <ModalFooter save="Apply" handleClose={openModal} handleApply={handleApply} /> } 
      />
    </div>
  );
}

export default App;
