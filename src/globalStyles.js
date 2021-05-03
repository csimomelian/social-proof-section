import { createGlobalStyle } from 'styled-components';
import { device } from './utils/breakpoints';

const GlobalStyle = createGlobalStyle`

    * {

        margin: 0;
        padding: 0;
        outline: 0;
        min-width:0;
        min-height:0;
        box-sizing: border-box;
    }

    :root {

        font-size:55.25%;
        width:100%;
        height:100%;

        --color-very-dark-magenta: hsl(300, 43%, 22%);
        --color-soft-pink: hsl(333, 80%, 67%);
        --color-dark-grayish-magenta: hsl(303, 10%, 53%);
        --color-light-grayish-magenta: hsl(300, 24%, 96%);
        --color-white: hsl(0, 0%, 100%);

        @media ${device.tablet} { 

            font-size:57.25%;
        }

        @media ${device.tabletL} { 

            font-size:62.25%;

        }

    }

    body {
        position:relative;
        font-family: 'Spartan', sans-serif;
        padding:3rem;
        min-height:100%;
        display:flex;
        flex-direction:column;
        overflow-x:hidden;
        @media ${device.tabletL} { 

            padding:2rem 2rem 5rem 2rem;

        }
    }

`;
 
export default GlobalStyle;