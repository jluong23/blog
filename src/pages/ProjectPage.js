import {React} from "react";
import styled from "styled-components";
import ProjectOverview from "../components/ProjectOverview";
const Wrapper = styled.div`
  padding: .5em;
`


const ProjectPage = ({}) => {
    return <ProjectOverview title={"Projects"}/>
};

export default ProjectPage;