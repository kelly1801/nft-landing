import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function catCard({image, title}) {
  return (
    <Link to='catInfo'>
    <CardBody>
<Figure>
    <img src={image} alt="collection cover" />

<CardDescription>
    
    <TextWrapper>
    <h2>Cool Cats {title}</h2>
    <Price>
    <p>Top Bid</p>
    <p><img src='./images/Img-price.png'/>  0.003</p>
    <Before>
        <p>antes</p>
    <img src={`./images/Img-price.png`}/>
        <p> 0.003</p></Before>
    <Likes>
    <FavoriteBorderIcon onClick={() => styles.color="red"}/> 
        <p>145</p>
        </Likes>
    </Price>
    </TextWrapper>

</CardDescription>
</Figure>

</CardBody>
</Link>
  )
}

export default catCard

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
border: 1px solid var(--grey);
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
img{
    width: 14px;
}
`
const TextWrapper = styled.div`

text-align: center;
display: flex;

h2 {
    font: var( --body-16bold);
    text-align: left;
    color: var(--black)
   
}
span {
    font:  var(--body-14regular);;
    color: var(--grey);
   
}
p {
    font:  var(--body-14regular);;
    color: var(--grey);
   
}
`

const Price = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const Before = styled.div`
display: flex;
`
const Likes = styled.div`


display: flex;
align-items: center;
justify-content: center;


`