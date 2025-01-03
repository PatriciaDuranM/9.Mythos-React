import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { COLORS } from './Colors';
import { FONTS } from './FontsStyles';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        margin:0;
        background-color: ${COLORS.backgroundGrey};
        font-family: ${FONTS.poppins};
        color: white;
    }

`;
