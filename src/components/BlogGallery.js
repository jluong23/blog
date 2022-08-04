
import React from "react";
import styled from "styled-components";

const Caption = styled.figcaption`
    font-style: italic;
    font-size: 0.9em;
`

const Wrapper = styled.div`
    margin: 1em 0;
`

const Images = styled.figure`
        display: flex;
        margin: 0;
        & > * {
            flex: 1 1 0px;
            padding: 0em .5em;
            @media screen and (min-width: 1000px) {
                padding: 0.25em;
            }
            @media screen and (min-width: 1200px) {
                padding: 0.1em;
            }
        }
        & figure img{
                object-fit: cover;
                width: 100%;
                height: 100%;
        }
`
const BlogGallery = (props) => {
    return (
        <Wrapper>
            <Images>
                {props.children}
            </Images>
            {props.imgCaption ? <Caption >{props.imgCaption}</Caption> : null}
        </Wrapper>
    )
}

export default BlogGallery;