import { useState, useContext } from 'react';
import { FaWindowClose} from 'react-icons/fa'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config'

//context
import { AuthContext } from "../firebase/auth/AuthContext";

function UpdateModal( { showModalUpdate, onCloseUpdate, updateTaskItem } ) {
  const [taskUpdate, setTaskUpdate] = useState('');
  const [dateUpdate, setDateUpdate] = useState('');
  const [categoryUpdate, setCategoryUpdate] = useState('');
  const [updateItem, setUpdateItem] = useState(null)

  //user 
  const user = useContext(AuthContext);

  // const handleInputChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleCategoryChange = (event) => {
  //   const value = event.target.value;
  //   setCategory(value);
  // };

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };

  // const updateTask = () => {
  //   updateTaskItem(task.id)
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   //console.log(updateTaskItem)
    
  //   // try {
  //   //   const newItem = {
  //   //     taskUpdate,
  //   //     dateUpdate,
  //   //     categoryUpdateUpdate: {
  //   //       scheduled: category === 'scheduled' ? true : false,
  //   //       inProgress: category === 'inProgress' ? true : false,
  //   //       review: category === 'review' ? true : false,
  //   //       completed: category === 'completed' ? true : false,
  //   //     },
  //   //     createdBy: user.uid,
  //   //     author: user.displayName
  //   //   };
      
  //   //   const docRef = await addDoc(collection(db, "tasks"), newItem);
  //   //   const newId = docRef.id;
  
  //     // Update board items immediately
  //     //addTaskItem(prevItems => [...prevItems, { id: newId, ...newItem }]);
  
  //     // ... reset state
  //     setTask('');
  //     setDate('');
  //     setCategory('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  

  return (
    <>
      {showModalUpdate ? (
        <div className='modal-overlay flex justify-center items-center fixed top-0 left-0 w-screen h-screen z-50'>   
        <div className="rounded-md w-96 p-20 bg-white relative">
          <div className="modal-content">
            <h2 className='text-lg font-bold text-slate-900 absolute top-6 left-3'>Edit Board</h2>
            <input className='w-full mb-2' type="text" value={taskUpdate} onChange={''} placeholder='Enter a value'/>
            <input className='w-full mb-2' type="date" value={dateUpdate} onChange={''} />
            <div className='w-full mb-2'>
            <select className='w-full mb-2' value={categoryUpdate} onChange={''}>
              <option value="" disabled>Select category</option>
              <option value="scheduled">Schedule</option>
              <option value="inProgress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
            </select>
            </div>
            <div className="modal-buttons">
              <button className='bg-slate-900 text-white p-3 rounded-sm w-56' onClick={''}>Update</button>
              <FaWindowClose className='text-lg text-red-700 absolute top-2 right-2 cursor-pointer' onClick={onCloseUpdate}/>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
}

export default UpdateModal;
