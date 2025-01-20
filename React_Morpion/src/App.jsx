import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/Home/Home.jsx";
import Ranking from './components/Rank/Ranking.jsx'
import ClassicGaming from "./components/Game/ClassicGaming.jsx";
import IAGaming from "./components/Game/IAGaming.jsx";

function App() {
   return(
       <>
           <BrowserRouter>
               <NavBar />
               <Routes>
                   <Route path="/" element={< Home />} />
                   <Route path="/game" element={< ClassicGaming />} />
                   <Route path="/game" element={< IAGaming />} />
                   <Route path="/rank" element={< Ranking />} />
               </Routes>
           </BrowserRouter>
       </>
   )
}
export default App
