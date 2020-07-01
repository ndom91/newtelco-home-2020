/* eslint-disable quotes */
import media from '../style/mq.js'

export const bz = `
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  `

export const font = {
  h1: `
        font-size: 5rem;
        font-weight: 900;
         ${media.tablet`
            font-size: 4rem;
         `}
    `,
  button: `
        font-weight: 700;
    `,
}

export const colors = {
  dark: '#222',
  light: '#fafafa',
  purple: '#9135AD',
}

export const z = {
  modalBackground: `z-index: 100000;`,
  modal: `z-index: 200000;`,
}
