import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
// // Import components
import CompShowBlog from './Component/CompShowBlog.js'
import CreateBlog from './Component/CompCreateBlog.js'
import EditBlog from './Component/CompEditBlog'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
      
       
       
          <Routes>
            <Route path='/' element= { <CompShowBlog />}></Route>
            <Route path='/create' element= { <CreateBlog />}></Route>
            <Route path='/edit/:id' element={<EditBlog />}></Route> 
            
          </Routes>

      </header>
    </div>
  );
}

export default App;
