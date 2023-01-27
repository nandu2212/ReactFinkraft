

import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Basecomponent from './components/BaseComponent';

import Table from './components/table'

function App() {
return(
  <>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Basecomponent/>}></Route>
      <Route path="/grid" element={<Table/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
