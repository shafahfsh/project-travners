import React, { useState } from 'react'
import '../css/Travel.css'
import Card from '../components/Card'
import Data from '../components/Data'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'



function Travel () {
    const [item, setItems] = useState(Data)

    const [selectedCategory, setSelectedCategory] = useState('Semua');

    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  
    const filteredDestinations = Data.filter(
      (Data) => selectedCategory === 'Semua' || Data.category === selectedCategory
    );

    return (
        <div className='travel' >
            <div className='navbar'>
                <Navbar/>
            </div>
            
             <section className='hero-travel'>
                 <div className='hero-travel-left'>
                    <h2>Nikmati perjalananmu
                        <span className="yellow-text">menggunakan Travners</span>
                        </h2>
                 </div>
                <div className="hero-travel-right">
                    <div className='circle-hero-travel' >
                        <img src='/images/img-travel.png'/>
                    </div>
                </div>
            
             </section>
            <section className='search-bar'>
                <div className='search-info'>
                    <div class="search-item">
                        <div class="search-label">Lokasi</div>
                        <div class="search-value">Jakarta</div>
                    </div>
                    <div class="search-divider"></div>
                    <div class="search-item">
                        <div class="search-label">Tanggal</div>
                        <div class="search-value">Sabtu, 1 Juni</div>
                    </div>
                    <div class="search-divider"></div>
                    <div class="search-item">
                        <div class="search-label">Harga</div>
                        <div class="search-value">IDR 150.000</div>
                    </div>
                </div>
                <button className='search-button'>
                    Search
                </button>
            </section>
            <section className='travel-content'>
                <div className='side-bar'>
                    <Sidebar/>
                </div>
                <div className='items-container'>
                    <Card item={item} />
                </div>
            </section>
            

        </div>
    )
}

export default Travel;
