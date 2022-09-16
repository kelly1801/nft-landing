import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Header from '../components/Header'
import CatsHeader from '../components/CatsHeader'
import Avatar from '../components/Avatar'
import Filter from '../components/filter'
import nftData from '../../data'
import CatCard from '../components/catCard'

function CoolCats() {
  const collection = nftData.coolCats.map(
    card => <CatCard key={card.id} image={card.image} title={card.name}/>
  )
  
  return (
    <PageContainer>
    <Header/>
    <Banner img={"./images/Img-banner-1.png"}>
      </Banner>
      <Avatar />
    <CatsHeader/>
    
    <MainContent>
    <Filter/>

    <CatsContainer>
    {collection}
      </CatsContainer>
      </MainContent>

    </PageContainer>
  )
}

export default CoolCats

const PageContainer = styled.main`

`
const MainContent = styled.section`
display: flex;
@media(max-width: 768px){
 flex-direction: column;
}
`
const CatsContainer =  styled.article`



  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 6px;
  padding: 0 4rem;

  @media(max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 6px;
    grid-row-gap: 1px;
    margin: 0;
    padding: 2rem;
  }
  
`

