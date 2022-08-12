import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    background-image: ${({ theme }) => `url(${theme.backgroundImage})`}
  }

  img {
    opacity: ${({theme}) => theme.imageOpacity};
  }
`

