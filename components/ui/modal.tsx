"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="light-shadow absolute left-1/2 top-1/2 h-[calc(100vh-32px)] w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-[#242424]">
      <FontAwesomeIcon
        onClick={onClose}
        icon={faClose}
        className="absolute right-2 top-2 h-4 w-4 cursor-pointer text-white/70"
      />
      {children}
    </div>
  );
};
