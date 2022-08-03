import React from "react";
import styled from "styled-components";

const Caption = styled.figcaption`
    font-style: italic;
    font-size: 0.9em;
    `

const Figure = styled.figure`
`

const ErrorDiv = styled.div`
    border: .1em solid red;
    width: 35%;
    height: 10em;
    margin: auto;
`

const Image = styled.img`
    width: 100%;
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth}` : null}
    `

const BlogImage = ({blogId, imgName, imgAlt, imgCaption, maxWidth}) => {
    let imgSrc;
    
    try {
        imgSrc = require(`../blogs/assets/${blogId}/${imgName}`);
    } catch (error) {
        imgSrc = "";
        return (
            <ErrorDiv>
                Could not find {imgName} with blog id {blogId}
            </ErrorDiv>
        )
    }
    return (
        <Figure>
            <Image src={imgSrc} alt={imgAlt} maxWidth={maxWidth}/>
            {imgCaption ? <Caption >{imgCaption}</Caption> : null}
        </Figure>
    );
};

export default BlogImage;