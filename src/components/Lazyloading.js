import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from '../Images/swim wear.jpg'


const Lazyloading = () => {
  return (
    <div>
      <h4>Lazy loading</h4>
      <LazyLoadImage src={Image} alt='image' />
    </div>
  )
}

export default Lazyloading
