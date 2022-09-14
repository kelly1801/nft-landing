import React from 'react'
import styled from 'styled-components'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
function Filter() {
  return (
    
   <SideBar>

<summary><FilterAltOutlinedIcon/>  Filtros</summary>
<details open>
  <summary><GridViewOutlinedIcon/>Cara</summary>

<label>
  <input type="checkbox" name="" id="" />
  Ditto
  </label>
  
  <label>
    <input type="checkbox" name="" id="" />
  Mummy
    </label>
    
    <label>
      <input type="checkbox" name="" id="" />
      Beard Pirate
      </label>
      
      <label>
        <input type="checkbox" name="" id="" />
        Zombie
        </label>
        <label>
          <input type="checkbox" name="" id="" />
          Three eyes
          </label>
          
          <label>
            <input type="checkbox" name="" id="" />
            Unamused
            </label>
            
            <label>
           
              <input type="checkbox" name="" id="" />
              Angry Cute
              </label>
              
              <label>
                
                <input type="checkbox" name="" id="" />
                Stunned
                </label>
                
                <label>
                 
                  <input type="checkbox" name="" id="" />
                  Sunglasses Heart
                  </label>
</details>

<details open>
  <summary><GridViewOutlinedIcon/> Sombreros</summary>

 <label htmlFor="">
  <input type="checkbox" name="" id="" />
  Hat White
  </label>
  
  <label htmlFor="">
    <input type="checkbox" name="" id="" />
    Bucket Hat Green
    </label>
    
    <label htmlFor="">
      <input type="checkbox" name="" id="" />
      Mohawk Green
      </label>
</details>

<details open>
  <summary> <GridViewOutlinedIcon/> Camisa</summary>

  <label htmlFor="">
    <input type="checkbox" name="" id="" />
    Overalls blue
    </label>
    
    <label htmlFor="">
      <input type="checkbox" name="" id="" />
      Buttondown green
      </label>
      
      <label htmlFor="">
        <input type="checkbox" name="" id="" />
        Robe blue
        </label>
</details>

   </SideBar>
  )
}

export default Filter

const SideBar = styled.aside`

width: 30rem;
height:100vh;


details {
  margin-left:2rem;
  display: flex;
  flex-direction: column;

}
label {
margin:  1rem;
}

input {
  margin-right: 0.6rem;
}

summary {
  display: flex;
  align-items: center;
}


`