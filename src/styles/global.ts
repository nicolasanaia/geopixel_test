import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
            --background: #181818;
            --text-color: white;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        padding: 0;
        margin: 0;
    }

    body, input, textarea, button {
        font-weight: 400;
    }

    p {
        color: var(--text-color);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        color: var(--text-color);
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`