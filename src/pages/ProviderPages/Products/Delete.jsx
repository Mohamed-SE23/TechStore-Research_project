import React, { useState } from 'react';

const DeleteConfirmation = ({ onUnPopUP, onConfirmDelete}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = () => {
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setShowPopup(false);
    console.log("Item deleted");
    // Perform delete operation here
  };

    // handle Delete function
    const handleDelet = () => {
        const userConfirmed = window.confirm("Are you sure you want to delete this item?");
        
        if (userConfirmed) {
          // Perform delete operation
          console.log("Item deleted");
        } else {
          console.log("Deletion canceled");
        }
      };

  return (
    <div className="relative p-4">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-4 rounded shadow-lg">
          <p className="text-black mb-2">Are you sure you want to delete this item?</p>
          <button
            onClick={handleConfirmDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300 mr-2"
          >
            OK
          </button>
          <button
            onClick={() => setShowPopup(false)}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
        </div>
    </div>
  );
};

export default DeleteConfirmation;
