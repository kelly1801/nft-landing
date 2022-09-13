import React from 'react'
import styled from 'styled-components'

function ItemCol({id,image,title,price,stock}) {
  return (
    
    <ItemContainer>

<p>{id}</p>

<Figure>
<img src={image}/>
</Figure>

<ItemDescription>
    <h3>{title}</h3>
    <Price>
    <img src='public\images\Img-price.png'/>
    <p>{price}</p>
    </Price>
  
   
</ItemDescription>

<Stock>

<span>{stock}</span>
</Stock>

    </ItemContainer>
  )
}

export default ItemCol


const ItemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid var(--grey);
margin: 0.5rem 1rem;
p {
    font: var(--body-16bold);
}

`

const ItemDescription = styled.figcaption`
display: flex;
flex-direction: column;
justify-content: center;
flex-grow: 1;

img{
    width: 10px;
    height: 10px;
align-self: center;
}
h3 {
    font: var(--body-16bold);
}
p {
    font: var(--body-16bold);
    color: var(--grey) 
}
`
const Stock = styled.div`
color: var(--green);
font: var(--body-16regular);`
const Price = styled.div`
display: flex;
`
const Figure = styled.figure`
margin: 0 1rem`