import React from 'react'
import styled from 'styled-components'


function CatsHeader() {
  return (
    <Header>

<TextWrapper>

        <h2>Cool Cats NFT</h2>
   <p>Creado por <span className='text-blue'>CoolCatsContract</span></p>
</TextWrapper>
</Header>
  )
}

export default CatsHeader

const Header = styled.header`



`

const TextWrapper = styled.div`
display: flex;
flex-direction:column;
text-align: center;
margin: 5rem 0;

@media(max-width: 768px){
  margin: 3rem 0;
}
`

