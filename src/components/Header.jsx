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
background-color: #fff;
display:flex;
justify-content: space-between;
align-items: center
`
const LogoContainer = styled.figure`
margin: 1rem;
`
const ButtonGroup = styled.div`


display: flex;
align-items: center;
margin-left: 1rem;
`
const Btn = styled.button`
color: var(--primary);
background-color: var(--white);
border: 1px solid var(--primary);
padding: 0.5rem 1.5rem;
margin-right: 1rem;
border-radius: 5px;
`

const BtnLeft = styled(Btn)`
color: var(--white);
background-color: var(--primary);

`