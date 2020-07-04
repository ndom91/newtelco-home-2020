import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle = () => (
  <Global
    style={css`
      html {
        font-family: 'Roboto', sans-serif;
        font-feature-settings: 'dlig', 'zero', 'ss01', 'cv05', 'cv10';
      }

      @supports (font-variation-settings: normal) {
        html {
          font-family: 'Roboto', sans-serif;
        }
      }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
)

export default GlobalStyle
