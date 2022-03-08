import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    //style reset
    ${reset}
    
    body{
        font-family: 'Roboto', sans-serif;
        margin:0;
        letter-spacing: -0.02em;
    }

    :root {
        --main-color: #5F46F8;
        --red: #E74C3C;
        --gray: #888;
        --light-gray: #C6CACC;
    }
`;

export default GlobalStyles;
