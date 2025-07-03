import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <div className="flex">
        <div className='basis-100'>
        
        </div>
        <div className='w-100 text-center mt-20' >
          <p className='text-4xl'>404</p>
            <p>Sorry there is no pages</p>
           <img src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
          <Link to={'/allBooks'}>
          <button className='bg-amber-950 text-amber-100 p-4 rounded-2xl'>Buy Books</button>
          </Link>
          
        </div>
        <div className='basis-100'></div>
      </div>
    </div>
  )
}

export default PageNotFound
