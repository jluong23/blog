import styled from "styled-components";
import blog1 from "./assets/1/content";
import blog2 from "./assets/2/content";
const Wrapper = styled.div`
  & img {
    width: 100%;
    @media screen and (min-width: 800px) {
      width: 25%;
    }
  }
` 

function getBlogContent(id){
  let blogDict = 
  {
    1: blog1,
    2: blog2
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
