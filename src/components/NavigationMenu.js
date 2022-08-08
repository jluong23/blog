import React, { useEffect } from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  background-color: gray;
  height: 100%;
  top: 0;
  z-index: 10;
  width: fit-content;
  `

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  & a {
    padding: 0 .5em;
    margin: .3em 0;
    text-decoration: none;
    color: inherit;
    width: 100%;
  }
  & a:hover {
    background-color: darkgray;
  }
`

const itemNames = {
  "Home": "/",
  "Projects": "/projects",
  "Blog": "/posts",
  "About": "/about"
};



const NavigationMenu = React.forwardRef((props, ref) => {
  const {navMenuRef} = ref;
  const closeNavMenu = (e) => {
    if(navMenuRef.current && props.navMenuFocus && !navMenuRef.current.contains(e.target)){
      props.setNavMenuFocus(false);
    }
  }
    useEffect(() => {
      // when the user clicks off nav bar whilst open, close nav bar
      // Bind the event listener
      document.addEventListener("mousedown", closeNavMenu);
      // cleanup, remove listener for listener
      return function cleanup(){document.removeEventListener("mousedown", closeNavMenu)};
    });

  return (
    props.navMenuFocus &&
    <Wrapper ref={navMenuRef}>
      <MenuItems>
          {Object.keys(itemNames).map((item) => {
            let url = itemNames[item]
            return (
              <Link to={url} key={item} onClick={() => {props.setNavMenuFocus(false)}}>
                {item}
              </Link>
            )
          })}
      </MenuItems>
    </Wrapper>
  );
});

export default NavigationMenu;