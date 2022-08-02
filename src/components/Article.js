import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
  padding-bottom: .3em;
  margin: 1em 0;

  & a {
    text-decoration: none;
    color: inherit;
  }
`
const ArticleTitle = styled.h2`
    text-align: center;
    padding-bottom: 1em;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  /* article description */
  & p {
    padding: .5em;
    width: 60%;
    text-align: center;
    max-width: 350px;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`

const ArticleImage = styled.img`
  background-color: gray;
  opacity: 50%;
  width: 50%;
  max-width: 500px;
  /* @media screen and (min-width: 1000px) {
    width: 35%;
  } */
`

const Article = ({color, title, description, thumbnail, onClickUrl}) => {
  return (
    <Wrapper color={color}>
      <Link to={onClickUrl}>
        <ArticleTitle>{title}</ArticleTitle>  
        <ArticleContent>
          {thumbnail == null ?  <ArticleImage/> : <ArticleImage  src={thumbnail} />}
          <p>{description}</p>
        </ArticleContent>
      </Link>
    </Wrapper>
  );
};

export default Article;