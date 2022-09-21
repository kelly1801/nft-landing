import React from 'react'
import styled from 'styled-components'
function Avatar() {
  return (
    
    <AvatarContainer className='avatar'>
        <img src="/Img-cool-cat.png" alt="cool cats cover" />
    </AvatarContainer>
  )
}

export default Avatar

const AvatarContainer = styled.figure`

 
   position: absolute;
   top: 45%;
   left: 50%;
   transform: translateX(-50%);

 @media(max-width: 768px){ 
  top: 15%;
  img{
   width: 4rem;
}
}
`