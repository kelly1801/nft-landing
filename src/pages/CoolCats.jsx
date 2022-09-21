import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Header from "../components/Header";
import CatsHeader from "../components/CatsHeader";
import Avatar from "../components/Avatar";
import Filter from "../components/Filter";
import CatCard from "../components/CatCard";

function CoolCats({ catsCol }) {
  const [inputField, setInputField] = useState({ check: false });
  const [filterValue, setFilterValue] = useState();
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {

    wholeCollection();
  
    }, [])

  function handleChange(event) {
  
    setInputField(!inputField.check);
    setFilterValue(event.target.value);
    loader()
    filterCard();
  }


  function filterCard() {

  setCollection(
    catsCol
      .filter((card) => card.property === filterValue)
      .map((card) => (
        <CatCard key={card.id} image={card.image} title={card.name} />
      ))

      );
    

    }
function loader() {
  
 
    setCollection(<img src="/loading.gif"/>)
  
}
   
    


  function wholeCollection() {
  setCollection(
      catsCol.map((card) => (
        <CatCard
          key={card.id}
          image={card.image}
          id={card.id}
          title={card.name}
        />
      ))
    );
 
  }

  return (
  <PageContainer>
      <Header />
      <Banner img={"/Img-banner-1.png"} />
      <Avatar />
      <CatsHeader />
    <MainContent>
      <Filter getCheck={inputField.check} getChange={handleChange} />
      <CatsContainer>
          
          {collection }
          
      </CatsContainer>
    </MainContent>
  </PageContainer>
  );
}

export default CoolCats;


const PageContainer = styled.main``;
const MainContent = styled.section`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CatsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 6px;
  padding: 0 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 3px;
    margin: 0;
    padding: 0;
  }
`;
