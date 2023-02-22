import BoardSection from "./BoardSection";
import {useState, useEffect, useContext} from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase/config'


import Card from "./Card";

const Board = () => {

    const [taskType, setTaskType] = useState([])

    //console.log(user)
    
    useEffect(() => {
      const fetchBoardItems = async () => {
        const userId = auth.currentUser.uid;
        const boardItemsRef = collection(db, 'tasks');
        console.log(boardItemsRef)
        const q = query(boardItemsRef, where('createdBy', '==', userId));
        const querySnapshot = await getDocs(q);
        
        const items =  querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTaskType(items);
        //console.log(taskType)
      };
  
      fetchBoardItems();
    }, [auth, db]);

    
    return ( 
        <>
            <div className="grid grid-cols-4 gap-4">
               <BoardSection title='Scheduled' items={taskType.filter(item => item.category.scheduled === true)}/>
               <BoardSection title='In Progress' items={taskType.filter(item => item.category.inProgress === true)}/>
               <BoardSection title='Reviewed' items={taskType.filter(item => item.category.reviewed === true)}/>
               <BoardSection title='Completed' items={taskType.filter(item => item.category.completed === true)}/>
            </div>

        </>
     );
}
 
export default Board;