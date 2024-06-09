import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Landing from './pages/Landing'
import About from './pages/About'
import Travel from './pages/Travel'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'


const App = () => {
  return (
    
      <div className="App">
        

        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/travel' element={<Travel/>}/>
        </Routes>
      </div>
  );
}

export default App;
