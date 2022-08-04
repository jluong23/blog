
import React from "react";
import styled from "styled-components";

const Gallery = styled.figure`
        display: flex;
        & > * {
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
        <Gallery>
            {props.children}
        </Gallery>
    )
}

export default BlogGallery;