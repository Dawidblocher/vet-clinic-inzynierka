import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}    
    
    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem; // happy rems
        font-family: 'Lato', sans-serif;
        background-color: #F3F7FF;;
        color: #414141;
    }
`;

export default GlobalStyle;
