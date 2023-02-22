import Menu from "./Menu";



const Sidebar = () => {
    return ( 
        <>
            <div className="h-screen w-64 p-5 shadow-sm bg-slate-900">
                <h1 className="text-white mb-6 font-medium text-4xl">KAANBAN</h1>
                <Menu />
            </div>
        </>
     );
}
 
export default Sidebar;