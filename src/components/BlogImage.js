import React from "react";
import styled from "styled-components";
import blogData from "../blogs/BlogData.json";


const BlogImage = ({blogId, imgName, imgAlt, imgCaption}) => {
    let imgSrc = require(`../blogs/assets/${blogId}/${imgName}`);
    return (
        <figure>
            <img src={imgSrc} alt={imgAlt}/>
            {imgCaption ? <figcaption >{imgCaption}</figcaption> : null}
        </figure>
    );
};

export default BlogImage;