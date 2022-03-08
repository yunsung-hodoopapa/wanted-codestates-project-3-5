import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    body{
        margin: 0 auto;
        margin-right: auto;
        margin-left: auto;
    }
    :root {
        --main-color: #5F46F8;
        --red: #E74C3C;
        --gray: #888;
        --light-gray: #C6CACC;
    }
`;

export default GlobalStyles;
