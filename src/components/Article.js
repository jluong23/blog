import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
  padding-bottom: .3em;
  margin: 5em 0;

  & a {
    text-decoration: none;
    color: inherit;
  }
`
const ArticleTitle = styled.h2`
    text-align: center;
`

const ArticleDescription = styled.div`
    text-align: center;
`

const ArticleContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ArticleImage = styled.img`
    background-color: gray;
    opacity: 50%;
    width: 50%;
    @media screen and (min-width: 800px) {
      width: 25%;
    }
`

const Article = ({color, title, description, imgSrc, onClickUrl}) => {
  return (
    <Wrapper color={color}>
      <Link to={onClickUrl}>
        <ArticleTitle>{title}</ArticleTitle>  
        <ArticleContent>
          {imgSrc == null ?  <ArticleImage/> : <ArticleImage  src={imgSrc} />}
          <ArticleDescription>{description}</ArticleDescription>
        </ArticleContent>
      </Link>
    </Wrapper>
  );
};

export default Article;