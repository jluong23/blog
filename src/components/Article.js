import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

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

const ArticleDate = styled.p`
  font-style: italic;
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
  opacity: 70%;
  width: 50%;
  max-width: 500px;
`

const Article = ({variant, date, color, title, description, thumbnail, onClickUrl}) => {
  return (
    <Wrapper color={color}>
      <Link to={onClickUrl}>
        <ArticleTitle>{title}</ArticleTitle>  
        {date && <ArticleDate>{moment(date).format("MMMM Do YYYY")}</ArticleDate>}
        <ArticleContent>
          {thumbnail == null ?  <ArticleImage/> : <ArticleImage  src={thumbnail} />}
          <p>{description}</p>
        </ArticleContent>
      </Link>
    </Wrapper>
  );
};

export default Article;