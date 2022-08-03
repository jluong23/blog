import styled from "styled-components";
import blog1 from "./assets/1/content";
import blog2 from "./assets/2/content";
import blog3 from "./assets/3/content";
const Wrapper = styled.div`

  & figure {
    width: 70%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 800px) {
      width: 50%;
      max-width: 600px;
    }
  }  


`

function getBlogContent(id){
  let blogDict = 
  {
    1: blog1,
    2: blog2,
    3: blog3,
  }
  if(id in blogDict){
    return (
      <Wrapper>
        {blogDict[id]}
      </Wrapper> 
    );
  }return null;
}

export default getBlogContent;
