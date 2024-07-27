import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePasswordModal = ({ closeModal }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Ambil token dari localStorage
      if (!token) {
        toast.error('User not authenticated.', { autoClose: 2000 });
        return;
      }

      const response = await axios.patch(
        'http://localhost:4000/api/auth/change-password',
        {
          oldPassword,
          newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        toast.success('Password telah diganti!', { autoClose: 2000 });
        // Tutup modal setelah 2 detik
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      } else {
        toast.error('An error occurred. Please try again.', { autoClose: 2000 });
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl mb-4 font-semibold">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="flex flex-col">
            <label className="block mb-2 text-gray-700" htmlFor="oldPassword">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-gray-700" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Change Password
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ChangePasswordModal;
