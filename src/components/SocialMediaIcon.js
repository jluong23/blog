import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Icon = styled.a`
    color: inherit;
    margin: 0 .2em;
    background-color: transparent;
`

const SocialMediaIcon = (props) => {
    const {url, icon, color} = props;

    return (
        <Icon href={url} color={color}>
            <FontAwesomeIcon icon={icon}/>
        </Icon>
    );
};

export default SocialMediaIcon;