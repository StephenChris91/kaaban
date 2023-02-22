import Card from "./Card";

const Board = () => {
    return ( 
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col justify-start items-start bg-gray-50 bordered rounded-sm shadow-sm p-4 h-screen font-bold">
                <h2>Scheduled</h2>
                <Card />
                </div>
                <div className="flex flex-col justify-between bg-gray-50 bordered rounded-sm shadow-sm p-4 h-screen font-bold"><h2>
                In Progress</h2></div>
                <div className="flex flex-col justify-between bg-gray-50 bordered rounded-sm shadow-sm p-4 h-screen font-bold"><h2>
                Reviewed</h2></div>
                <div className="flex flex-col justify-between bg-gray-50 bordered rounded-sm shadow-sm p-4 h-screen font-bold"><h2>
                Completed</h2></div>
            </div>

        </>
     );
}
 
export default Board;