import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update';
// import Delete from './components/Delete/Delete';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
    <h2 className="main-header">CRUD Operations Using React</h2>
    <BrowserRouter>
        <Routes>
          <Route path='/Create' element={<Create />} />
          <Route path='/' element={<Read />} />
          <Route path='/Update' element={<Update />} />
          {/* <Route path='/Delete' element={<Delete />} /> */}
        </Routes>


      </BrowserRouter>
   </div>
  );
}

export default App;
