import React from "react";
import styled from "styled-components";

const Caption = styled.figcaption`
    font-style: italic;
    font-size: 0.9em;
    `

const Figure = styled.figure`
    text-align: center;
`

const Image = styled.img`
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth}` : null}
`

const BlogImage = ({blogId, imgName, imgAlt, imgCaption, maxWidth}) => {
    let imgSrc = require(`../blogs/assets/${blogId}/${imgName}`);
    return (
        <Figure>
            <Image src={imgSrc} alt={imgAlt} maxWidth={maxWidth}/>
            {imgCaption ? <Caption >{imgCaption}</Caption> : null}
        </Figure>
    );
};

export default BlogImage;