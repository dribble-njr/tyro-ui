import React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'large' | 'middle' | 'small'

export type ButtonType =
  | 'primary'
  | 'default'
  | 'dashed'
  | 'text'
  | 'danger'
  | 'link'

export type ButtonShape = 'default' | 'cicle' | 'round'

export interface BaseButtonProps {
  type?: ButtonType
  shape?: ButtonShape
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  size?: ButtonSize
}

export type AnchorButtonProps = {
  href: string
  target?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
} & BaseButtonProps &
  Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    'type' | 'onClick'
  >

export type NativeButtonProps = {
  htmlType?: 'submit' | 'button' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    shape,
    disabled,
    className,
    children,
    size = 'middle',
    htmlType = 'button',
    href,
    ...rest
  } = props

  const classes = classNames('tyro-btn', className, {
    [`tyro-btn-${type}`]: type,
    [`tyro-btn-${shape}`]: shape,
    [`tyro-btn-${size}`]: size,
    [`tyro-disabled`]: disabled
  })

  if (type === 'link' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  const buttonNode = (
    <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )

  return buttonNode
}

export default Button
