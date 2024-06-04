// src/components/Sidebar.js
import React,{useState} from 'react';
import '../css/Sidebar.css';



const Sidebar = () => {

    const[categories,setCategories]=useState();
    const[open,setOpen]=useState(true);
    const[promo,setpromo]=useState(true);
    const[booking,setBooking]=useState(true);

    const handleChange=(data)=>{
        if(data=="open")
        {
          if(open==true){
            console.log(data,"our value")
          }
        }
        if(data=="promo")
        {
          if(promo==true){
            console.log(data,"our value")
            }
        }
        if(data=="booking")
          {
            if(booking==true){
              console.log(data,"our value")
            }
          }

    }

  return (
    <div className="sidebar">
      <div className="exclusive-section">
        <h2>Eksklusif di Travners</h2>
        <p>Promo dan penawaran terbatas</p>
        <div className='exclusive-option'>
          <ul>
            <li><a href="#">Promo Terbaru</a></li>
            <li><a href="#">Paket Hemat</a></li>
            <li><a href="#">Paket Exclusive</a></li>
            <li><a href="#">Gratis Voucher</a></li>
          </ul>
        </div>
      </div>
      <div className='price-range'>
        <h2>Kisaran Harga</h2>
        <select>
          <option>Rp 0 - 2.000.000+</option>
          <option>Rp 2.500.000 - 4.000.000+</option>
        </select>
      </div>
      <div className='categories'>
        <h2>Kategori</h2>
        <ul>
        <li><input type='radio' name='categories' value='Semua' onChange={e=>setCategories(e.target.value)}/> Semua</li>
        <li><input type='radio' name='categories' value='Pantai' onChange={e=>setCategories(e.target.value)}/> Pantai</li>
        <li><input type='radio' name='categories' value='Hiburan' onChange={e=>setCategories(e.target.value)}/> Hiburan</li>
        <li><input type='radio' name='categories' value='Museum' onChange={e=>setCategories(e.target.value)}/> Museum</li>
        </ul>
      </div>
      <div className='other-features'>
        <h2>Fitur Lainnya</h2>
        <ul>
          <li><input type='checkbox' value={open} onChange={()=>handleChange('Buka Sekarang')}/>Buka Sekarang</li>
          <li><input type='checkbox' value={promo} onChange={()=>handleChange('Special Promo')}/>Special Promo</li>
          <li><input type='checkbox' value={booking} onChange={()=>handleChange('Booking')}/>Booking</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
