import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ul, h1, h2, h3, h4, h5, h6, li, p
    {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    body
    {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #010101;
    }
    header
    {
        border-bottom: 2px solid #3a97e8;
    }
`;