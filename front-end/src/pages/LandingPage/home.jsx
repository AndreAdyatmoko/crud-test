import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { format } from 'date-fns';
import Footer from '../footer/footer';
import ChangePasswordModal from '../../components/modals/changePasswordModal'; // Import modal

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem('token');

  // Jika token tidak ada, redirect ke halaman login
  if (!token) {
    window.location.href = '/';
    return null;
  }

  const fullName = localStorage.getItem('full_name') || 'User';
  const lastLogin = localStorage.getItem('last_login') || 'Never';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const formattedLastLogin = lastLogin 
    ? format(new Date(lastLogin), "eeee, MMMM d, yyyy 'at' hh:mm a")
    : "Never";

  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col h-screen font-sans">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome, {fullName}!</h1>
          <CgProfile className="text-3xl" />
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl mb-4 font-semibold text-gray-800">Dashboard</h2>
          <p className="text-lg mb-4 text-gray-700">Hello, {fullName}!</p>
          <p className='text-base mb-6 text-gray-600'>{formattedLastLogin}</p>
          <div className="flex flex-col items-center">
            <button
              onClick={openModal}
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 mb-4"
            >
              Change Password
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('full_name');
                localStorage.removeItem('last_login');
                window.location.href = '/';
              }}
              className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300"
            >
              Log Out
            </button>
          </div>
        </div>
      </main>

      <Footer />
      {isModalOpen && <ChangePasswordModal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
