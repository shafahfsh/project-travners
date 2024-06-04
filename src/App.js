import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Landing from './pages/Landing'
import About from './pages/About'
import Travel from './pages/Travel'


const App = () => {
  return (
    
      <div className="App">
        

        <Routes>
          <Route path='/' element={<Travel/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/' element={<About/>}/>
        </Routes>
      </div>
  );
}

export default App;
