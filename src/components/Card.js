import React from 'react';
import '../css/Card.css';

function Card({ item }) {
    return (
        <div className='card-container'>
            {item.map((val) => (
                <div key={val.id} className='card-card'> 
                    <div className='card'>
                    
                        <img src={val.image} alt={val.title} />
                        <div className='card-info'>
                        <div className='card-title'>{val.title} 
                            <span className='card-price'>{val.price}</span>
                            </div>
                        <div className='card-location'>{val.location}</div>
                        <div className='card-rating'>
                            <span>{val.rating}</span>
                            <span>★</span>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
