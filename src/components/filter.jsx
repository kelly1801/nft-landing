import React from 'react'
import styled from 'styled-components'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Input from './Input'
function Filter({getCheck, getChange}) {
  return (
    
   <SideBar>

<summary><FilterAltOutlinedIcon/>  Filtros</summary>
<details open>
  <summary><GridViewOutlinedIcon/>Cara</summary>

  <Input title="Ditto" value='ditto' getCheck={getCheck} getChange={getChange}/>
 <Input title="Mummy" value='mummy' getCheck={getCheck} getChange={getChange}/>
    <Input title="Beard Pirate" value='beard' getCheck={getCheck} getChange={getChange} />
    
    <Input title="Zombie" value='zombie' getCheck={getCheck} getChange={getChange} />
      
     <Input title="Three eyes" getCheck={getCheck} getChange={getChange}/>
     <Input title=" Unamused" getCheck={getCheck} getChange={getChange}/>
     <Input title="Angry Cute" getCheck={getCheck} getChange={getChange} />
     <Input title="Stunned" getCheck={getCheck} getChange={getChange}/>
     <Input title="Sunglasses Heart" getCheck={getCheck} getChange={getChange} />   
         
              
             
</details>

<details open>
  <summary><GridViewOutlinedIcon/> Sombreros</summary>

 
 <Input title="White Hat" value='white' getCheck={getCheck} getChange={getChange}/>
     <Input title="Bucket Hat Green" value='green' getCheck={getCheck} getChange={getChange}/>
     <Input title="Mohawk Green" value='mohawk' getCheck={getCheck} getChange={getChange} /> 
  
 
</details>

<details open>
  <summary> <GridViewOutlinedIcon/> Camisa</summary>
   <Input title="Overalls blue" getCheck={getCheck} getChange={getChange}/>
     <Input title="Buttondown green" getCheck={getCheck} getChange={getChange}/>
     <Input title=" Robe blue" getCheck={getCheck} getChange={getChange}/> 
  
</details>

   </SideBar>
  )
}

export default Filter

const SideBar = styled.aside`

@media(max-width: 768px){
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}

details {
  
  display: flex;
  flex-direction: column;
  @media(max-width: 768px){


   }

}
label {
  margin:  1rem;
  }
  
  input {
    margin-right: 0.6rem;
  }

summary {
  display: flex;
 width: 8rem;
 margin-left: 1rem;


}
`