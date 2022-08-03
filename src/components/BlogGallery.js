
import React from "react";
import styled from "styled-components";

const Gallery = styled.figure`
        display: flex;
        & figure img{
                object-fit: cover;
                width: 100%;
                height: 100%;
                max-width: 500px;
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