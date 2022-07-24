import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Icon = styled.a`
    background-color: ${(props) => 
        props.color == null ? "#FFF" : props.color
    };
    padding: 0 .2em;
    color: inherit;
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