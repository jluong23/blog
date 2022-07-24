import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.color ? props.color : null};
  padding-bottom: .3em;
`
const ArticleTitle = styled.h2`
    text-align: center;
`

const ArticleDescription = styled.div`
    text-align: center;
`

const ArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ArticleImage = styled.img`
    background-color: gray;
    border-radius: 50%;
    width: 120px;
    height: 120px;
`

const Article = ({color, title, description, imgSrc}) => {
  return (
    <Wrapper color={color}>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent>
        {imgSrc == null ?  <ArticleImage/> : <ArticleImage  src={imgSrc} />}
        <ArticleDescription>{description}</ArticleDescription>
      </ArticleContent>
    </Wrapper>
  );
};

export default Article;