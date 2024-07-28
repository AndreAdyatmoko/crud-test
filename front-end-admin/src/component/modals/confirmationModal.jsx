import React from "react";
import ButtonPrimary from "../../component/button/button";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this user? This action cannot be undone.</p>
        <div className="flex justify-end gap-2">
          <ButtonPrimary text="Cancel" className="bg-gray-500 hover:bg-gray-700" onClick={onClose} />
          <ButtonPrimary text="Confirm" className="bg-red-500 hover:bg-red-700" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
