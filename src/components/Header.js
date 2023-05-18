import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'


function Header() {
    const img =  <FaShoppingCart/>
  return (
    <div className='header'>
      
         <div className="cart-div">
            <span style={{display:'inline', pa:'1rem'}} > {img}  000
            
           </span>
         </div>
         </div>
  )
}

export default Header