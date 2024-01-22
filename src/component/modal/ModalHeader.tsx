import React from "react";

interface headerType {
  header : string
}

const ModalHeader = (props: headerType) => {
  return (
    <div className="flex p-4 border-b-2 border-black border-spacing-4">
      <div className="text-black font-bold text-2xl">{props.header}</div>
    </div>
  )
}

export default ModalHeader;