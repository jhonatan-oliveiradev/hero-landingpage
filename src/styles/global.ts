import { createGlobalStyle } from "styled-components";

import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: url(${Ellipse2}) no-repeat 1350px, 
                    url(${Ellipse1}) no-repeat 1250px;
        background-size: cover;
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default GlobalStyle;
