import {React} from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
const Wrapper = styled.div`
  padding: .5em;
`

const BlogPost = (props) => {
  const {blogId} = useParams()
  console.log(blogId);
  return (
    <Wrapper>
      <h1>Blog Post {blogId}</h1>
    </Wrapper>
  );
};

export default BlogPost;