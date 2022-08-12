import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import {  Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";


const Wrapper = styled(animated.div)`
  position: fixed;
  background-color: ${({ bgColor }) => `${bgColor}`};
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
    background-color: ${({ hoverColor }) => `${hoverColor}`};

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
  const theme = useTheme();

  const slideInAnimation = useSpring({ 
    config: {...config.slow},
    from: {marginLeft: -150},
    to: {
      marginLeft: props.navMenuFocus ? 0 : -150,
    }

  });

  const closeNavMenu = (e) => {
    // when the user clicks off nav bar whilst open, close nav bar
    if(navMenuRef.current && props.navMenuFocus && !navMenuRef.current.contains(e.target)){
      props.setNavMenuFocus(false);
    }
  }
    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", closeNavMenu);
      // cleanup, remove listener for listener
      return function cleanup(){document.removeEventListener("mousedown", closeNavMenu)};
    });

  return (
    <Wrapper style={slideInAnimation} ref={navMenuRef} bgColor={theme.navMenuColor}>
      <MenuItems hoverColor={theme.navMenuHoverColor}>
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