import { injectGlobal, css } from 'styled-components'

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        color: hsl(0, 0%, 15%);
        background-color: #e0e0e0;
        font-family: 'Roboto Condensed', sans-serif;
        /*remove browser padding and margin*/
        padding: 0;
        margin: 0;
    }
`

export const Shadow = css`
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
`
