import React from "react";
import styled from "styled-components";
import { useModalContext } from "../hooks/useModalContext";
const Caption = styled.figcaption`
    font-style: italic;
    font-size: 0.9em;
    `

const Figure = styled.figure`
    margin: 1em 0;
`

const ErrorDiv = styled.div`
    border: .1em solid red;
    width: 35%;
    height: 10em;
    margin: auto;
`

const Image = styled.img`
    width: 100%;
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : "max-width: 700px;"}
    cursor: pointer;
    `
const ImageModal = styled.div`
    & img{
        max-height: 70vh;
        padding-bottom: .5em;
    }
    text-align: center;
`

const BlogImage = ({blogId, imgName, imgAlt, imgCaption, maxWidth}) => {
    let imgSrc;
    const { openModal } = useModalContext(); 
    
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

    const ImageContent = <React.Fragment>
        <Image src={imgSrc} alt={imgAlt} maxWidth={maxWidth}/>
        {imgCaption ? <Caption >{imgCaption}</Caption> : null}
    </React.Fragment>

    const modalContent = <ImageModal>
        {ImageContent}
    </ImageModal>

    return (
        <Figure onClick={() => {openModal(modalContent)}}>
            {ImageContent}
        </Figure>
    );
};

export default BlogImage;