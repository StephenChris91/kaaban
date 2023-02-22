import {useState, useEffect, useContext} from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase/config'



//context
import { AuthContext } from "../firebase/auth/AuthContext";


const BoardSection = ( {title, items, children } ) => {
    
    return ( 
        <>
            <div className="bg-white p-2 rounded-sm">
                <h1 className="font-bold text-lg">{title}</h1>
                {!items ? <p>No items found</p> : items.map(item => (
                  <div key={item.id}>
                    <p>{item.task}</p>
                  </div>
                ))}
            </div>
        </> 
    );
}
 
export default BoardSection;