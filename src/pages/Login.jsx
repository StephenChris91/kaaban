import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../firebase/auth/AuthContext';


const Login = () => {
    //const [user, setUser] = useState(null)


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const logged = await signInWithPopup(auth, provider);
        let { user } = logged;
        //currentUser = user;
    }

    const handleSignIn = () => {
        signInWithGoogle()
        //setUser(currentUser)
        //console.log(currentUser)
    };

    // const handleSignOut = () => {
    //     auth.signOut();
    // };

    return ( 
    <div className="w-full flex justify-center items-center mx-auto">
        <div className="w-screen h-screen p-20 bg-slate-50 relative">
            <div className="flex flex-col justify-between items-start mx-auto absolute left-40 top-64 ">
                <h1 className="font-medium text-3xl mb-1">Login</h1>
                <p className="text-slate-600 mb-7">Sign In  with your google account to get started</p>
                <button className="w-80 bg-slate-900 p-4 text-slate-400 text-xl font-normal rounded" onClick={handleSignIn}>Login here</button>
            </div>
        </div>
        <div className="w-screen h-screen p-20 bg-slate-900 relative">
            <div className="flex flex-col justify-between items-start mx-auto absolute top-64 left-40">
                <h1 className="font-medium text-9xl text-white">Kaanban</h1>
                <p className="text-slate-600">Set your goals, track and them and smash them with this Kanban Board</p>
            </div>
        </div>
    </div> 
    );
}
 
export default Login;