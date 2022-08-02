import styled from "styled-components";
import blog1 from "./assets/1/content";
import blog2 from "./assets/2/content";
const Wrapper = styled.div`

  & figure {
    width: 70%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
  }  

  & p{
    width: 70%;
    text-align: center;
    /* margin: 0; */
    margin-right: auto;
    margin-left: auto;
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
