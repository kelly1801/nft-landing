import React from 'react'
import styled from 'styled-components'

function ColCard({img, icon,title, author, description}) {
  return (
   
<CardBody>
<Figure>
    <img src={img} alt="collection cover" />

<CardDescription>
    <img src={icon} alt="icon collection" />
    
    <TextWrapper>
    <h2>{title}</h2>
    Por <span>{author}</span>
    <p>{description}</p>
    </TextWrapper>

</CardDescription>
</Figure>

</CardBody>

  )
}

export default ColCard

const CardBody = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 1rem;
max-width: 400px;
cursor: pointer;

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
position: relative;
height: 9rem;
img {
 width: 3rem;
position: absolute;
top: -15%;
left: 40%
}
`
const TextWrapper = styled.div`
margin: 1rem 0;
text-align: center;
h2 {
    font: var(--subtitle-22medium);
    
}
span {
    font: var(--body-16bold);
    color: var(--primary);
   
}
p {
    font: var(--body-16regular);
    color: var(--grey);
   
}
`