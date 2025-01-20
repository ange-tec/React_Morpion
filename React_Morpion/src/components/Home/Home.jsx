import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import {Link, Navigate} from "react-router";
import IAGaming from "../Game/IAGaming.jsx";

function Home() {
    const [userInput, setUserInput] = useState("");

    const [toGaming, setToGaming] = useState(false);

    const userInfo = () => {return toast(`Bienvenue: ${ userInput }`)}
    const handleClickChangePage = () => {
       return
    }

    return (
        <div className="min-h-[90.8vh] bg-gray-800">
            <div className="max-w-screen flex justify-evenly">
                <form className="bg-white drop-shadow-2xl px-8 pt-6 pb-8 my-8 rounded-md ">
                    <div className="mb-4 mt-4">
                        <label className="block text-gray-700 text-sm font-bold my-6 uppercase" htmlFor="username">
                            Pseudo
                        </label>
                        <input
                            className="shadow appearance-none border rounded
                            w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username" value={userInput} onChange={(e) => {
                            setUserInput(e.target.value)
                        }}/>
                    </div>

                    <div className="buttons flex justify-center my-12">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                        rounded focus:outline-none focus:shadow-outline"
                                type="button" onClick={() => { userInput !== "" ? userInfo(): null}}>
                            Confirmer
                        </button>

                    </div>

                    <h1 className="text-xl text-gray-700 text-center font-bold uppercase"> Classique ou alternatif ?</h1>

                    <div className="buttons flex justify-center my-12">
                        <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                        rounded focus:outline-none focus:shadow-outline"
                                type="button">
                            <Link to={"./../../ClassicGaming"} />
                            Jouer contre un autre joueur
                        </button>
                    </div>

                    <div className="buttons flex justify-center my-12">
                        <button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                        rounded focus:outline-none focus:shadow-outline"
                                type="button" >
                           Jouer contre une ia
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Home;