import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
import undo from "../../assets/undo.svg";
import {useState} from "react";

function IAGaming() {
    const [array, setArray] = useState(Array(9).fill(null));

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    return (
        <div className="min-h-[90.8vh] bg-gray-800 flex justify-center">
            <div className="w-full max-w-[400px] mt-4">
                <h1 className="text-5xl font-bold text-white mb-8 text-center"> Tic Tac Toe </h1>

                <div className="flex justify-between mb-5">
                    <div className="flex">
                        <img src={circle} width={35}/>
                        <img src={cross} width={35}/>
                    </div>
                    <span className={`rounded-md px-8 py-3 mr-6 bg-slate-800 drop-shadow-2xl font-bold ? "text-2xl font-bold text-green-400 animate-bounce" : "text-xl text-white" }`}> </span>
                    <button type="submit" className="bg-slate-400 rounded border px-3 py-1 drop-shadow-2xl">
                        <img src={undo} width={15}/>
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-3 rounded-xl overflow-hidden mb-6">
                    {array.map((squares, index) => (
                        <button key={index}
                                className={`h-32 w-full bg-slate-800 rounded-lg 
                                font-light transition-colors duration-200 hover:bg-gray-900 drop-shadow-xl`}>
                            <div className="flex justify-center">
                                {squares && (
                                    <img src={`${squares != 'X' ? circle : cross}`} width={60}/>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grid-cols-3 gap-3 rounded-md flex justify-center">
                    <div className={`bg-teal-400 text-center font-bold rounded-xl h-20 w-full`}> X(YOU)</div>
                    <div className={`bg-slate-300 text-center font-bold rounded-xl h-20 w-full`}> Tie </div>
                    <div className={`bg-amber-400 text-center font-bold rounded-xl h-20 w-full`}>O(CPU)</div>
                </div>
            </div>
        </div>
    )
}

export default IAGaming