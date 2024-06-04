import React, { useState } from 'react'
import '../css/Travel.css'
import Card from '../components/Card'
import Data from '../components/Data'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


function Travel () {
    const [item, setItems] = useState(Data)
    return (
        <div className='travel'>
            <div className='navbar'>
                <Navbar/>
            </div>
            
             <section className='hero'>
                 <div className='hero-left'>
                    <h2>Nikmati perjalananmu
                        <span className="yellow-text">menggunakan Travners</span>
                        </h2>
                 </div>
                <div className="hero-right">
                    <div className='circle-hero' >
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
                <div className='search-button'>
                    <p>Search</p>
                </div>
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
