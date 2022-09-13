import React from 'react'
import styled from 'styled-components'

function BannerMenu() {
  return (
   <Header>
<h2>Explore Collections</h2>

<List>
  <Item>Tendencias</Item>
  <Item>Cima</Item>
  <Item>Arte</Item>
  <Item>Música</Item>
  <Item>Nombre de dominio</Item>
  <Item>Mundos Virtuales</Item>
  <Item>Cartas Coleccionables</Item>
</List>

   </Header>

  )
}

export default BannerMenu

const Header = styled.header`
h2 {
    text-align: center;
    margin: 2rem 0;
}
`
const List = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
margin: 1rem 0;
color: var(--grey);
border-bottom: 1px solid var(--grey);
li:hover {
    color: var(--black);
    border-bottom: 2px solid var(--primary);
padding: 1rem;
}
`
const Item = styled.li`
text-align:center;
padding: 1rem;

`
