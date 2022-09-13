import React from 'react'
import NaveBar from '../components/Header'
import styled from 'styled-components'
import Card from '../components/Card'

export default function Home() {
  
  return (
    
    <MainContent>
     <NaveBar/>
     <MainSection>

<TextWrapper>
    <h1>Descubra, recopile y venda NFT extraordinarios</h1>
    <p>en el primer y más grande mercado de NFT del mundo</p>
    <Btn>Explorar</Btn>
</TextWrapper>

<Card/>
     </MainSection>
     <Section>
        collection
     </Section>
     <Section>
        trends
     </Section>
   
    </MainContent>
  )
}
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 2rem;
width: 35%;

h1 {
  
margin: 1rem 0;

}
p{
font: var(--subtitle-22medium);
  margin-bottom: 1rem ;
  color:(--black)
}

`
const MainContent = styled.main`
background-color: var(--grey-2);
height: 100vh;
`
const MainSection = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem;
background-image: url('./images/cover-home.png');
background-repeat: no-repeat;
background-position: cover;
height: calc( 100vh - 4rem);
`
const Section = styled(MainSection)`
` 
const Btn = styled.button`
color: var(--white);
background-color: var(--primary);
border: 1px solid var(--primary);
padding: 0.5rem 1.5rem;
margin-right: 1rem;
border-radius: 5px;
`