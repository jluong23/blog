import React from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

const Wrapper = styled.div`
    position: absolute;
    background-color: darkgray;
`

const Items = styled.ul`

`

const NavigationMenu = (props) => {
  return (
    <Wrapper absolutePosition={props.absoluteNavigationMenu}>
      <Items>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
        <ul>4</ul>
        <ul>5</ul>

      </Items>
    </Wrapper>
  );
};

export default NavigationMenu;