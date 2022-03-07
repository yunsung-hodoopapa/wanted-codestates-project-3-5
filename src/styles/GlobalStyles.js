import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    //style reset
    ${reset}
    
    body{
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --main-color: #4EAE3A;
        --red: #E74C3C;
        --gray: #696E6F;
        --light-gray: #C6CACC;
    }
`;

export default GlobalStyles;
