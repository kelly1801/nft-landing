import Home from "./pages/Home"
import Explore from "./pages/Explore"
import CoolCats from "./pages/CoolCats"
import CatInfo from './pages/CatInfo'
import nftData from "../data"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
   
   <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="explore" element={<Explore/>} />
    <Route path="explore/coolcats" element={<CoolCats catsCol={nftData.coolCats}/>} />
    <Route path="explore/coolcats/:cat" element={<CatInfo cats={nftData.coolCats}/>} />
    
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
