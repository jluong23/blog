import React from "react";
import styled from "styled-components";

const Caption = styled.figcaption`
    font-style: italic;
    font-size: 0.9em;
    `

const Figure = styled.figure`
    text-align: center;
`

const BlogImage = ({blogId, imgName, imgAlt, imgCaption}) => {
    let imgSrc = require(`../blogs/assets/${blogId}/${imgName}`);
    return (
        <Figure>
            <img src={imgSrc} alt={imgAlt}/>
            {imgCaption ? <Caption >{imgCaption}</Caption> : null}
        </Figure>
    );
};

export default BlogImage;