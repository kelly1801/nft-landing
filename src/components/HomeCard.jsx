import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
function HomeCard({ image, button, description, title, color }) {
  return (
    <CardBody>
      <Figure>
        <img src={`${image}`} alt="cover" />

        <CardDescription color={color}>
          <TextWrapper>
            <h2>{title}</h2>
            <p>{description}</p>
          </TextWrapper>
          <Link to="/explore">
          <BtnColl color={color}>{button}</BtnColl>
          </Link>
        </CardDescription>
      </Figure>
    </CardBody>
  );
}

export default HomeCard;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  

  @media(max-width: 768px){
    margin: 2rem 0;
   
  
  }
`;
const Figure = styled.figure`
  width: 100%;
  border-radius: 10px;
  height: auto;
  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;
const CardDescription = styled.figcaption`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -0.5rem;
  padding: 1rem;
  border-radius: 0 0 10px 10px;
  text-align: center;
  color: var(--white);
  img {
    width: 50px;
    border-radius: 50%;
  }
`;
const TextWrapper = styled.div`
  margin-left: 1rem;

  h2 {
    font: var(--subtitle-22bold);
    margin: 10px 0;
  }
  p {
    font: var(--body-16regular);
    margin: 10px 0;
  }
`;
const BtnColl = styled.button`
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 1rem;
  background-color: ${(props) => props.color};
  color: var(--white);
  width: 6rem;
  cursor: pointer;
`;
