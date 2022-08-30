import React from 'react'
import './Hotels.css'
import { Link } from 'react-router-dom';

export default function Hotels({hotels}) {
console.log(hotels)
   
  return (
    <div className='container'>
        <h2>Hotels guests love</h2>
        <div className='parent'>

            {
                  hotels.map((hotel)=>(
                      
                        <div className='hotels'>
                     
                      
                        <img className='picture' src={hotel.image} alt="imag" />
                        <span className='hotelName'>{hotel.name}</span><br></br>
                        <span className='city'>{hotel.city}</span><br></br>
                        <span className='price'>R{hotel.price}</span><br></br>
                        <span className='price'>Rating {hotel.rating}</span><br></br>
                        <Link to = {`/hotel/${hotel.id}`}> 
                        <button className="siCheckButton">See availability</button>
                        
                        </Link>
                        
                  </div>
                

                  ))
            }

                   

            
                </div>
        </div>
  )
}
