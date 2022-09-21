import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useParams} from "react-router-dom";


function CatInfo({cats}) {
 

  const {cat} = useParams() 
  
  

  return (
    <CardBody>
<Figure>
<img src={cats[cat - 1].image} alt="cat cover" />
<Likes>
    <FavoriteBorderIcon/> 
        <p>145</p>
        </Likes>
</Figure>
<CatDescription>
  <Autor>Cool Cats NFT</Autor>

<h1>Cool cat {cats[cat - 1].name}</h1>
<Views>
  <Vitem><VisibilityOutlinedIcon/> <p>283 vistas</p></Vitem>
  <Vitem><FavoriteBorderIcon/> <p>145 favoritos</p></Vitem>
</Views>

<CallTo>
<Vitem><AccessTimeIcon/>  <p> La oferta finaliza el 30 de mayo de 2022 a las 6:26 am PST</p></Vitem>
  <Citem><img src='/Img-price.png'/><h3> 7.3</h3> <span> ($33,847.33)</span></Citem>
  <ButtonGroup>
    <Btn>Comprar Ahora</Btn>
    <BtnL>Hacer Oferta</BtnL>
  </ButtonGroup>
  </CallTo>
  <Text>
  <h3>Descripción</h3>
  <p>
  Cool Cats es una colección de 9,999 NFTs generados aleatoriamente y cuidadosamente seleccionados que existen en Ethereum Blockchain. Los poseedores de Cool Cat pueden participar en eventos exclusivos como reclamos de NFT, rifas, obsequios comunitarios y más. Recuerde, todos los gatos son geniales, pero algunos son más geniales que otros.
  </p>
  </Text>
</CatDescription>

    </CardBody>
  )
}

export default CatInfo



const CardBody = styled.section`
display: flex;
width: 100%;
margin: 1rem;
cursor: pointer;
align-items: center;

@media(max-width: 768px){

  flex-direction: column;
}
`
const Autor = styled.span`
color: var(--primary);
font: var(--body-16regular);
margin: -1rem 0 1rem;
`
const Figure = styled.figure`
width: 35vw;
border: 1px solid var(--grey);
border-radius: 10px;
margin: 3rem;
box-shadow: 2px 2px 5px 2px var(--grey);
img{
    width:100%;
 
   border-radius: 10px 10px 0 0;
}

@media(max-width: 768px){

  width: 85%;
}
`
const Likes = styled.figcaption`
display: flex;
align-items: center;
justify-content: left;
color: var(--grey);
margin: 0.5rem;
p{
  
font:var(--body-16regular);
margin: 0.5rem;
}

`
const CatDescription = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
width: 50%;

@media(max-width: 768px){

  width: 85%;

  h1 {
    font: var(--title-32bold);
  }
}
`
const Views = styled.div`
display:flex;
margin-left: -1rem;
`
const Vitem = styled.div`
display: flex;
align-items: center;
justify-content: left;
color: var(--grey);
margin: 1rem;
p {
  margin: 0 1rem ;
  font: var(--body-16regular);
}

@media(max-width: 768px){

  font: var(--body-14regular);
  margin: 0.8rem;
}
`

const Citem = styled(Vitem)`

color: var(--black);
justify-content: left;
h3{
  margin-left: 0.6rem;
}
span {
  color: var(--grey);
  margin-left: 0.6rem;
}
`
const CallTo = styled.div`
border: 1px solid var(--grey);
border-radius: 1rem;
padding: 0.5rem 0;

justify-content: space-around;
`
const ButtonGroup = styled.div`
display: flex;

@media(max-width: 768px){

flex-direction: column;
 
}
`
const Btn = styled.button`
background-color: var(--primary);
padding: 0.5rem 1.5rem;
margin: 0.5rem 0;
border: none;
color: var(--white);
margin-left: 1.2rem;
border-radius: 0.7rem;
cursor: pointer;
@media(max-width: 768px){

  margin: 0.5rem 1rem;
   
  }
`
const BtnL = styled(Btn)`

color: var(--primary);
background-color: var(--white);
border: 1px solid var(--primary);
`
const Text = styled.div`
display: flex;
flex-direction: column;
h3{
  margin: 1rem 0;
}
p {
  font: var(--body-16regular);
text-align: justify;
}
`