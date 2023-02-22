import { Link } from 'react-router-dom'
import Create from './modal';


const Menu = () => {
    return ( 
        <>
            <div className="flex flex-col justify-center items mx-auto">
                <Link to='/create' className='hover:bg-slate-800 p-3 text-slate-600 hover:text-white font-medium rounded m-2 w-full'>Create</Link>
            </div>
        </>
     );
}
 
export default Menu;