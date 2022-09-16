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
  <input type="checkbox" name="ditto" id="ditto" />
  Ditto
  </label>
  
  <label>
    <input type="checkbox" name="mummy" id="mummy" />
  Mummy
    </label>
    
    <label>
      <input type="checkbox" name="beard" id="beard" />
      Beard Pirate
      </label>
      
      <label>
        <input type="checkbox" name="zombie" id="zombie" />
        Zombie
        </label>
        <label>
          <input type="checkbox" name="eyes" id="eyes" />
          Three eyes
          </label>
          
          <label>
            <input type="checkbox" name="unamused" id="unamused" />
            Unamused
            </label>
            
            <label>
           
              <input type="checkbox" name="angry" id="angry" />
              Angry Cute
              </label>
              
              <label>
                
                <input type="checkbox" name="stunned" id="stunned" />
                Stunned
                </label>
                
                <label>
                 
                  <input type="checkbox" name="glasses" id="glasses" />
                  Sunglasses Heart
                  </label>
</details>

<details open>
  <summary><GridViewOutlinedIcon/> Sombreros</summary>

 <label >
  <input type="checkbox" name="hat_white" id="hat_white" />
  Hat White
  </label>
  
  <label >
    <input type="checkbox" name="hat_green" id="hat_green" />
    Bucket Hat Green
    </label>
    
    <label >
      <input type="checkbox" name="mohawk" id="mohawk" />
      Mohawk Green
      </label>
</details>

<details open>
  <summary> <GridViewOutlinedIcon/> Camisa</summary>

  <label >
    <input type="checkbox" name="overall" id="overall" />
    Overalls blue
    </label>
    
    <label htmlFor="">
      <input type="checkbox" name="button" id="button" />
      Buttondown green
      </label>
      
      <label >
        <input type="checkbox" name="robe" id="robe" />
        Robe blue
        </label>
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