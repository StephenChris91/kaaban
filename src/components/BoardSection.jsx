
import { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import Modal from './modal';


//icon
import { FaTrash } from 'react-icons/fa';



//context


const BoardSection = ( { title, boardItems, deleteItem, singleDoc } ) => {
    const [updateTask, setUpdateTask] = useState('');
    const [showModalUpdate, setShowModalUpdate ] = useState(false)


    const handleEditItem = (item) => {
      setShowModalUpdate(true);
      singleDoc(item.id)
    };

    const handleCloseModal = () => {
      setShowModalUpdate(false);
    };

    const handleUpdateItem = (id) => {
      console.log('Update Item')
    }

    
    return ( 
        <>
            <div className="bg-white p-2 rounded-sm ">
                <Modal showModal={showModalUpdate} onClose={handleCloseModal} updateTaskItem={handleEditItem} className='z-50'/> 
                <h1 className="font-bold text-lg mb-5">{title}</h1>
                {!boardItems ? <p>No items found</p> : boardItems.map(item => (
                  <div key={item.id} className='-z-60'>
                    <Card className='mb-2'>
                      <div className='relative'>
                        <FaTrash  className='text-red-700 cursor-pointer absolute top-2 right-2' onClick={() => deleteItem(item.id)}/>
                        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.task}
                        </h5>
                        <p className='mb-2'>Due Date: {item.date}</p>
                        <Button className='bg-red-700 w-full' onClick={() => handleEditItem(item.id)}>
                          Edit Board
                          <svg
                            className="ml-2 -mr-1 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
        </> 
    );
}
 
export default BoardSection;