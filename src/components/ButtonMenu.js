import React from 'react'
import styled from '@emotion/styled'
import media from '../style/mq'
import LanguageSelect from './LanguageSelect'

export const ButtonMenu = ({ handleClick, isActive }) => {
  return (
    <>
      <ButtonHamburger
        onClick={handleClick}
        className={isActive ? 'active' : ''}
        aria-label="Menu Button"
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
  display: inline-block;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  border-radius: 3px;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  ${media.tabletSmall_up`
    display: none;
  `}
  &.active {
    z-index: 9999;
    position: fixed;
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
