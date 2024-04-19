import React from 'react'
import { featured_instagram } from '../Constant/JsonData'

const FeaturedInstagram = () => {
  return (
    <>
      <div className='-mb-2'>
        {featured_instagram.map((val,index)=>
            <div key={val.id} className='inline-block ' style={{ height: index % 2 === 0 ? '26vh' : '30vh', width:'14.28%'}} >
          <img src={val.image} alt={`Images ${val.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>  
          </div>
        )}
      </div>
    </>
  )
}

export default FeaturedInstagram


