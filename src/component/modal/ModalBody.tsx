import React from "react";

interface bodyType {
  bodyContent : string;
}

const ModalBody:React.FC<bodyType> = (props) => {
  return (
    <div className="flex h-[300px] border-b-2 border-black border-spacing-4">
      <div>{ props.bodyContent }</div>
    </div>
  )
}

export default ModalBody;