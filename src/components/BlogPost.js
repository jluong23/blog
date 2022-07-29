import {React} from "react";
import { useParams } from "react-router-dom";
import getBlogContent from "../blogs/Blogs";
import styled from "styled-components";
import blogData from "../blogs/blogData.json";
const Wrapper = styled.div`
  padding: .5em;
`

const BlogContent = styled.div`
`

const BlogPost = (props) => {
  const {blogId} = useParams()
  const blog = blogData.find((b) => b.id == blogId)
  if(blog){
    return(
      <Wrapper>
        <h1>{blog.title}</h1>
        <h2>{blog.date}</h2>
        {getBlogContent(blogId)}
      </Wrapper>
    );
  }else{
    return(
      <Wrapper>
        Could not find blog...
      </Wrapper>
    )
  }
};

export default BlogPost;