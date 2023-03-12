
import { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import Modal from './modal';



//context


const BoardSection = ( { title, boardItems, showModal } ) => {
    const [selectedBoardItem, setSelectedBoardItem] = useState(null);
    const [showModalUpdate, setShowModalUpdate ] = useState(false)


    const handleEditItem = (item) => {
      //setSelectedBoardItem(item);
      console.log('edit modal')
      setShowModalUpdate(true);
    };

    const handleCloseModal = () => {
      setShowModalUpdate(false);
    };
    
    
    return ( 
        <>
          <Modal showModal={showModalUpdate} onClose={handleCloseModal} updateTaskItem={handleEditItem} />
            <div className="bg-white p-2 rounded-sm">
                <h1 className="font-bold text-lg mb-5">{title}</h1>
                {!boardItems ? <p>No items found</p> : boardItems.map(item => (
                  <div key={item.id}>
                    <Card className='mb-2'>
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.task}
                      </h5>
                      <Button className='bg-red-700' onClick={handleEditItem}>
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
                    </Card>
                  </div>
                ))}
            </div>
        </> 
    );
}
 
export default BoardSection;