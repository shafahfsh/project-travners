import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/App.css'
import Landing from './pages/Landing'
import About from './pages/About'
import Travel from './pages/Travel'
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleDetail from './components/ArticleDetail'


const App = () => {
  return (
    
      <div className="App">
        

        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/travel' element={<Travel/>}/>
          <Route path='/article' element={<Article/>}/>
          <Route path='/articledetail' element={<ArticleDetail/>}/>
          <Route path="/articles/:id" element={<ArticleDetail/>} />
        </Routes>
      </div>
  );
}

export default App;
