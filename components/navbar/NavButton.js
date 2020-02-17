import React from 'react'
import * as cn from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const buttonCls = (props) => cn('nav-button', props.className, {
  'nav-button--active': props.active,
  'nav-button--disabled': props.disabled,
  'nav-button--interactive': !props.active && !props.disabled
})

const NavButton = (props) => {
  return (
    <Button className={buttonCls(props)} {...props}>{props.children}</Button>
  )
}

const StyledNavButton = withStyles(theme => ({
  '@global': {
    '.nav-button': {
      background: theme.palette.secondary.main,
      color: theme.palette.text.main,

      fontSize: 18,
      fontWeight: 600,
      fontFamily: 'Nunito, sans-serif',

      borderRadius: 0,
      height: 48,
      padding: '10px 20px',
      margin: '2px'
    },
    '.nav-button--interactive:hover': {
      background: theme.palette.korn.light
    },
    '.nav-button--active': {
      background: theme.palette.dugg.light
    },
    '.nav-button--disabled': {
      color: theme.palette.text.light
    }
  },
  label: {
    textTransform: 'none'
  }
}))(NavButton)

export default StyledNavButton
