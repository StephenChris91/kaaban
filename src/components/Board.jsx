import BoardSection from "./BoardSection";
import {useState, useEffect, useContext} from 'react'
import { collection, deleteDoc, query, where, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/config'


//context
import { AuthContext } from "../firebase/auth/AuthContext";

const Board = () => {

    const [taskType, setTaskType] = useState([])
    const [editData, setEditData] = useState(null)
    const user = useContext(AuthContext);

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

    const handleDeleteItem = async (itemId) => {
      try {
        await deleteDoc(doc(db, "tasks", itemId));
        setTaskType(prevItems => prevItems.filter(item => item.id !== itemId));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    };

    // const getSingleDoc = (id) => {
    //   const docRef = doc(db, 'tasks', id);
    //   const docSnap = getDoc(docRef);

    //   if (docSnap.exists()) {
    //     setEditData(docSnap.data())
    //     console.log(editData)
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }

    return ( 
        <>
            <div className="grid grid-cols-4 gap-4">
                <BoardSection title="Scheduled" boardItems={taskType.filter(item => item.category.scheduled)} deleteItem={handleDeleteItem} />
                <BoardSection title="In Progress" boardItems={taskType.filter(item => item.category.inProgress)} deleteItem={handleDeleteItem} />
                <BoardSection title="Review" boardItems={taskType.filter(item => item.category.review)} deleteItem={handleDeleteItem} />
                <BoardSection title="Completed" boardItems={taskType.filter(item => item.category.completed)} deleteItem={handleDeleteItem} />
            </div>

        </>
     );
}
 
export default Board;