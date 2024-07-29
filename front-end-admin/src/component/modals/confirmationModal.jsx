import React from "react";
import ButtonPrimary from "../../component/button/button";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Konfirmasi Hapus</h2>
        <p className="mb-4">Apakah anda yakin ingin menghapus user ini? Setelah di hapus, data user ini tidak dapat dikembalikan.</p>
        <div className="flex justify-end gap-2">
          <ButtonPrimary text="Batalkan" className="bg-gray-500 hover:bg-gray-700" onClick={onClose} />
          <ButtonPrimary text="Hapus" className="bg-red-500 hover:bg-red-700" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
