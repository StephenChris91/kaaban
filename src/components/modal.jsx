import React, { useState } from 'react';

function Modal({ showModal, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleSave = () => {
    console.log(`Save input value: ${inputValue}`);
    onClose();
  };

  return (
    <>
      {showModal ? (
        <div className='modal-overlay flex justify-center items-center fixed top-0 left-0 w-screen h-screen'>   
        <div className="rounded-md w-96 p-20 bg-white relative">
          <div className="modal-content">
            <h2 className='text-lg font-bold text-slate-900 absolute top-6 left-3'>Create Board</h2>
            <input className='w-full mb-2' type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter a value'/>
            <input className='w-full mb-2' type="date" value={date} onChange={handleDate} />
            <div className="modal-buttons">
              <button className='bg-slate-900 text-white p-3 rounded-sm w-56' onClick={handleSave}>Save</button>
              <button className='absolute top-2 right-2' onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
}

export default Modal;
