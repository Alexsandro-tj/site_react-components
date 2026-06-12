import { BrowserRouter, Route, Routes } from "react-router-dom";
import Defaultlayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home";
import ToastsPage from '../src/Pages/ToastsPage/index.jsx';
import CardsPage from '../src/Pages/CardsPage/index.jsx';


export default function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
      <Route index element={<Home/>}/>
      <Route path="toasts" element={<ToastsPage />}/>
      <Route path="cards" element={<CardsPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

 