import React from 'react'
import styled from 'styled-components'
import media from '../style/mq'
import LanguageSelect from './LanguageSelect'

export const ButtonMenu = ({ handleClick, isOpen }) => {
  return (
    <>
      <ButtonHamburger
        onClick={() => handleClick()}
        className={isOpen ? 'active' : ''}
        aria-label='Menu Button'
      >
        <span />
      </ButtonHamburger>
      <LanguageSelect />
    </>
  )
}

export default ButtonMenu

const ButtonHamburger = styled.button`
  background: transparent;
  display: fixed !important;
  visibility: hidden;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  border-radius: 3px;
  top: 1rem;
  right: 1.5rem;
  z-index: 59999;
  &:focus {
    outline: none;
  }
  ${media.mobile`
    display: fixed;
    visibility: visible;
  `}
  ${media.mobile_up`
    display: none;
  `}
  &.active {
    position: absolute;
    span {
      background: transparent;
      &:before,
      &:after {
        top: 0;
        left: 0;
        background-color: #fff;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
  span {
    background: #dedede;
    border-radius: 10px;
    display: inline-block;
    height: 3px;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:before,
    &:after {
      content: '';
      background: #dedede;
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
`
