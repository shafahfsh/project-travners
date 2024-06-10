import React from 'react';
import ArticleList from '../components/ArticleList';
import Navbar from '../components/Navbar';
import '../css/Article.css';

const Article = () => {
  return (
    <div>
      <nav className='navbar'>
        <Navbar/>
      </nav>
    <div className="artikel">
      <div className='artikel-judul'>
        <h2><span className='yellow-text'>Travners</span> Artikel</h2>
        </div>
      <ArticleList/>
    </div>
    </div>
  );
};

export default Article;
