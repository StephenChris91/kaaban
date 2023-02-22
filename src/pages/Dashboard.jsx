import { useState } from 'react'; 
import Layout from "../components/Layout";
import Modal from '../components/modal';
import Sidebar from "../components/Sidebar";
import { auth } from '../firebase/config'

const Dasboard = () => {

    const [showModal, setShowModal ] = useState(false)

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
            <Sidebar />
            <Modal showModal={showModal} onClose={handleCloseModal}/>
            <button className='fixed top-5 right-5 p-3 rounded-sm w-40 bg-slate-900 text-white' onClick={handleOpenModal}> Create</button>
            <button className='fixed top-5 left-72 p-3 rounded-sm w-40 bg-slate-900 text-white' onClick={handleSignOut}>Log Out</button>
        </Layout>
        </>
     );
}
 
export default Dasboard;