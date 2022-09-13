import React from 'react'

import Banner from '../components/Banner'
import BannerMenu from '../components/BannerMenu'
import nftData from '../../data'
import ColCard from '../components/colCard'
import styled from 'styled-components'

function Explore() {

const cards = nftData.trends.map(
    card => <ColCard key={card.id} img={card.image} icon={card.icon} title={card.title} author={card.author}
    description={card.description}
    />)
   
return (
    <div>
     
        <Banner img={"./images/Img-banner-2.png"}/>
      <BannerMenu/>
      <CardSection>
      {cards}
      </CardSection>
      
      </div>
  )
}

export default Explore

const CardSection = styled.section`
padding: 2rem 3rem;
top:0;
bottom:0;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 1rem;
grid-row-gap: 1rem;

@media(max-width: 768px){
display: flex;
flex-direction: column;
}
`