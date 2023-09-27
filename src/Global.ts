import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family:'Montserrat', sans-serif;
    }

    button, input {
        border: none;
        background: none;
    }

    input:focus {
        outline: none;
    }
    a {
        text-decoration: none;
    }
    .active {
        text-decoration: underline;
    }
`