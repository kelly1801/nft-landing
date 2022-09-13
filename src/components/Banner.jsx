import React from 'react'

function Banner({img}) {
  return (
    <figure>
        <img src={img} alt="banner" />
    </figure>
  )
}

export default Banner