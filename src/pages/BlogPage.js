import {React} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import blogData from "../blogs/BlogData.json";
import moment from "moment";
import BlogOverview from "../components/BlogOverview";
const Wrapper = styled.div`
  padding: .5em;
`


const BlogPage = ({getLatestBlogs, blogCategories}) => {
    return <div>
        <BlogOverview title={"Blog"} getLatestBlogs={getLatestBlogs} numBlogs={"100"} useCategoryFilter={true} blogCategories={blogCategories}/>

    </div>
};

export default BlogPage;