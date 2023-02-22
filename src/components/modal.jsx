import { useState, useContext } from 'react';
import { FaWindowClose} from 'react-icons/fa'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config'

//context
import { AuthContext } from "../firebase/auth/AuthContext";

function Modal({ showModal, onClose, addTaskItem }) {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  //user 
  const user = useContext(AuthContext);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleSave = async () => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        task,
        date,
        category: {
          scheduled: true,
          inProgress: false,
          reviewed: false,
          completed: false,
        },
        createdBy: user.uid,
        author: user.displayName
      });
      addTaskItem(docRef)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    onClose();
  };

  return (
    <>
      {showModal ? (
        <div className='modal-overlay flex justify-center items-center fixed top-0 left-0 w-screen h-screen'>   
        <div className="rounded-md w-96 p-20 bg-white relative">
          <div className="modal-content">
            <h2 className='text-lg font-bold text-slate-900 absolute top-6 left-3'>Create Board</h2>
            <input className='w-full mb-2' type="text" value={task} onChange={handleInputChange} placeholder='Enter a value'/>
            <input className='w-full mb-2' type="date" value={date} onChange={handleDate} />
            <div className="modal-buttons">
              <button className='bg-slate-900 text-white p-3 rounded-sm w-56' onClick={handleSave}>Save</button>
              <FaWindowClose className='text-lg text-red-700 absolute top-2 right-2 pointer' onClick={onClose}/>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
}

export default Modal;
