import React from 'react'
import styled from 'styled-components'

function Banner({img}) {
  return (
   
    <BannerContainer>
        <img src={img} alt="banner" />
    </BannerContainer>

   
  
  )
}

export default Banner

const BannerContainer = styled.figure`
width:100%;
img{
  width: 100%;
}
`