import { createGlobalStyle } from "styled-components";

export const AppStyle = createGlobalStyle`
    .App {
        text-align: center;
    }

    .App-header {
        height: 100%;
        display: flex;
        flex-direction: row nowrap;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: white;
    }
`;
