import React from "react";
import { IoIosClose } from "react-icons/io";
import { CloseButtonProp } from "../../types";

const CloseButton = ({ onClick }: CloseButtonProp) => {
  return (
    <div className="flex justify-end h-3">
      <IoIosClose
        size={20}
        className="cursor-pointer text-white-1"
        onClick={onClick}
      />
    </div>
  );
};

export default CloseButton;
