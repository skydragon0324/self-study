import React from "react";

interface footerType {
  save:string;
  handleClose: () => void;
  handleApply: () => void;
}

const ModalFooter : React.FC<footerType> = (props) => {
  const { save, handleClose, handleApply } = props;
  return (
    <div className="flex justify-end gap-5 mt-6">
      <button
        className="p-2 px-4 bg-gray-500 text-red-300 font-bold rounded-md"
        onClick={handleClose}
      >
        Close
      </button>
      <button
        className="p-2 px-4 bg-gray-500 text-green-600 font-bold rounded-md"
        onClick={handleApply}
      >
        {save}
      </button>
    </div>    
  )
}

export default ModalFooter;

