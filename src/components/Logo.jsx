import React from 'react'
import image from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={image} alt="Logo" width={width} />
    </div>
  )
}

export default Logo