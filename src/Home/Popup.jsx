import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [open, setOpen] = useState(false); // Set initial state to false

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // Automatically open the dialog after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleClose = () => setOpen(!open);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto">
      <div
        className="relative m-4 p-4 w-full max-w-lg md:max-w-2xl lg:max-w-3xl rounded-lg bg-white shadow-md"
        onClick={(e) => e.stopPropagation()} // Prevent click inside the dialog from closing it
      >
        <div className="text-slate-800 flex justify-end items-end z-0">
          <i
            className="text-white cursor-pointer flex justify-center items-center mt-[-10px]  border-4 border-orange-900 bg-orange-900 p-2 mr-1 w-8 h-8 rounded-full"
            onClick={handleClose}
          >
            X
          </i>
        </div>
        <div className="text-slate-800 py-5">
          <h1 className='text-orange-600 text-lg text-center'>Please Provide Information About Yourself!</h1>
        </div>
        <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          <img
            src="https://th.bing.com/th/id/OIP.X2wJI-MLxsLL1Q0D2vP1yQHaE8?w=900&h=600&rs=1&pid=ImgDetMain"
            alt="Information"
            className="w-full max-h-72 object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;


