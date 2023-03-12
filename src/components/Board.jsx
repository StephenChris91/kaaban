import BoardSection from "./BoardSection";
import {useState, useEffect, useContext} from 'react'
import { collection, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config'


//context
import { AuthContext } from "../firebase/auth/AuthContext";

const Board = () => {

    const [taskType, setTaskType] = useState([])
    const user = useContext(AuthContext);


    // useEffect(() => {
    //   const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
    //     const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //     setTaskType(items);
    //     console.log(taskType)
    //   });
    //   return () => unsubscribe();
    // }, []);

    useEffect(() => {
      const q = query(collection(db, "tasks"), where("createdBy", "==", user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTaskType(items);
      });
      return () => {
        unsubscribe();
      };
    }, [user]);

    
    return ( 
        <>
            <div className="grid grid-cols-4 gap-4">
                <BoardSection title="Scheduled" boardItems={taskType.filter(item => item.category.scheduled)} />
                <BoardSection title="In Progress" boardItems={taskType.filter(item => item.category.inProgress)} />
                <BoardSection title="Review" boardItems={taskType.filter(item => item.category.review)} />
                <BoardSection title="Completed" boardItems={taskType.filter(item => item.category.completed)} />
            </div>

        </>
     );
}
 
export default Board;