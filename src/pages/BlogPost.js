import {React} from "react";
import { useParams } from "react-router-dom";
import getBlogContent from "../blogs/BlogGetter";
import styled from "styled-components";
import blogData from "../blogs/BlogData.json";
import moment from "moment";
const Wrapper = styled.div`
  padding: .5em;
`

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 1em;
`

const BlogPost = (props) => {
  const {blogId} = useParams()
  const blog = blogData.find((b) => b.id == blogId)
  if(blog){
    return(
      <Wrapper>
      <BlogHeader>
        <h1>{blog.title}</h1>
        <h2>{moment(blog.date).format("MMMM Do YYYY")}</h2>
      </BlogHeader>
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