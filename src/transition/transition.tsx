import React, { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  wrapper?: boolean
  children?: ReactNode
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { classNames, animation, wrapper, children, ...restProps } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
  timeout: 300,
  animation: 'zoom-in-top',
  wrapper: false
}

export default Transition
