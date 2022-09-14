import React from 'react'
import styled from 'styled-components'
function Avatar() {
  return (
    
    <AvatarContainer className='avatar'>
        <img src="./images/Img-cool-cat.png" alt="cool cats cover" />
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
  top: 20%;
  img{
   width: 5rem;
   
 }}
`