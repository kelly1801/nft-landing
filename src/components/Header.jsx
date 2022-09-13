import React from 'react'
import styled from 'styled-components'

function NaveBar() {
  return (
    <NavBar>
        <LogoContainer>
            <img src="./images/logo.png" alt="company logo" />
            </LogoContainer>
    
    <ButtonGroup>
       <Btn>Iniciar sesión</Btn>
       <BtnLeft>Iniciar sesión</BtnLeft>
 
    </ButtonGroup>
    
    </NavBar>
  )
}

export default NaveBar
const NavBar = styled.nav`
background-color: var(--white);
display:flex;
justify-content: space-between;
align-items: center;
height: 4rem;
padding: 2rem;
`
const LogoContainer = styled.figure`
margin: 1rem;
`
const ButtonGroup = styled.div`


display: flex;
align-items: center;

`
const Btn = styled.button`
color: var(--primary);
background-color: var(--white);
border: 1px solid var(--primary);
padding: 0.5rem 1.5rem;

border-radius: 5px;
`

const BtnLeft = styled(Btn)`
color: var(--white);
background-color: var(--primary);
margin-left: 1rem;
`