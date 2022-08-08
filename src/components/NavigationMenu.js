import React, { useEffect } from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  background-color: darkgray;
  height: 100%;
`

const MenuItems = styled.ul`
  list-style: none;
  padding: 0 1em;
  font-size: 1.5em;
  & li {
    margin: 1em 0;
  }
`

const itemName = ["Home", "Projects", "Blog", "About"];
const NavigationMenu = React.forwardRef((props, ref) => {
    useEffect(() => {
      // when the user clicks off nav bar whilst open, close nav bar
      function closeNavMenu(e){
        if(ref.current && props.navigationMenuFocus && !ref.current.contains(e.target)){
          props.setNavigationMenuFocus(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", closeNavMenu);
      // cleanup, remove listener for listener
      return function cleanup(){document.removeEventListener("mousedown", closeNavMenu)};
    });

  return (
    props.navigationMenuFocus &&
    <Wrapper ref={ref}>
      <MenuItems>
          {itemName.map((item) => {
            return <li key={item}>{item}</li>
          })}
      </MenuItems>
    </Wrapper>
  );
});

export default NavigationMenu;