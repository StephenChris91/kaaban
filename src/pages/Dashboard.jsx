import { useState } from 'react'; 
import Layout from "../components/Layout";
import Modal from '../components/modal';
import Sidebar from "../components/Sidebar";
import { auth } from '../firebase/config'

//context
import { useContext } from "react";
import { AuthContext } from "../firebase/auth/AuthContext";

const Dasboard = () => {

    const [showModal, setShowModal ] = useState(false)

    const user = useContext(AuthContext)

    const handleOpenModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      const handleSignOut = () => {
        auth.signOut();
    };
    return ( 
        <>
        <Layout>
          <div className='flex w-screen'>
            <div>
              <Sidebar />
            </div>
            <div className='w-screen p-2'>
              <Modal showModal={showModal} onClose={handleCloseModal}/>
              <div className='flex justify-between w-full items mb-10'>
                <button className='p-3 rounded-sm w-40 bg-slate-900 text-white' onClick={handleOpenModal}>Create</button>
                <button className='p-3 rounded-sm w-40 bg-slate-900 text-white' onClick={handleSignOut}>Log Out</button>
              </div>
              <div className='flex flex-col justify-content'>
                <div className='flex flex-col'>
                  <span>Welcome</span><h1 className='font-normal text-4xl'>{user.displayName}</h1>
                </div>
              </div>
              </div>
          </div>
            
        </Layout>
        </>
     );
}
 
export default Dasboard;