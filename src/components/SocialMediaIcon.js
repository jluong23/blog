import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialMediaIcon = (props) => {
    const {url, icon, color} = props;

    const Icon = styled.a`
        background-color: ${color == null ? "#FFF" : color };
        font-size: 3em;
        padding: 0 .2em;
        color: inherit;
    `

    return (
        <Icon href={url}>
            <FontAwesomeIcon icon={icon}/>
        </Icon>
    );
};

export default SocialMediaIcon;