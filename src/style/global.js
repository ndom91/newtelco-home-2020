import 'typeface-inter'
import { Global, css } from '@emotion/core'

const GlobalStyle = () => (
  <Global
    style={css`
      html {
        font-family: 'Inter', sans-serif;
        font-feature-settings: 'dlig', 'zero', 'ss01', 'cv05', 'cv10';
      }

      @supports (font-variation-settings: normal) {
        html {
          font-family: 'Inter var', sans-serif;
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

