import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  padding-bottom: .3em;
  margin: 5em 0;
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

const ArticleLink = styled.a`
  text-decoration: none;
  color: inherit;
`


const Article = ({color, title, description, imgSrc, onClickUrl}) => {
  return (
    <Wrapper color={color}>
      <ArticleLink href={onClickUrl}>
        <ArticleTitle>{title}</ArticleTitle>  
        <ArticleContent>
          {imgSrc == null ?  <ArticleImage/> : <ArticleImage  src={imgSrc} />}
          <ArticleDescription>{description}</ArticleDescription>
        </ArticleContent>
      </ArticleLink>
    </Wrapper>
  );
};

export default Article;