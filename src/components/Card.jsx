import React from 'react'
import styled from 'styled-components'

function Card() {
  return (

<CardBody>
<Figure>
    <img src="/img-cover.png" alt="cover" />

<CardDescription>
    <img src="/profile-cover.png" alt="" />
    
    <TextWrapper>
    <p>Tiny Dancer #2</p>
    <span>Aidan Tooth</span>
    </TextWrapper>

</CardDescription>
</Figure>

</CardBody>

  )
}

export default Card

const CardBody = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 470px;

`
const Figure = styled.figure`
width: 100%;
box-shadow: 2px 2px 5px 2px var(--grey);
border-radius: 10px;

img{
    width:100%;
 
   border-radius: 10px 10px 0 0;
}

`
const CardDescription = styled.figcaption`
background-color:  var(--white);
display: flex;
margin-top: -0.5rem;
padding: 1rem;
border-radius: 0 0 10px 10px;

img {
    width: 50px;
border-radius: 50%;
}
`
const TextWrapper = styled.div`
margin-left: 1rem;
p {
    font: var(--body-16bold);
    
}
span {
    font: var(--body-14regular)
}
`