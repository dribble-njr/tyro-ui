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

export interface BaseButtonProps {
  type?: ButtonType
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  size?: ButtonSize
  loading?: boolean
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
    disabled,
    className,
    children,
    size = 'middle',
    htmlType = 'button',
    href,
    loading = false,
    onClick,
    ...rest
  } = props

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    ;(
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e)
  }

  const classes = classNames('tyro-btn', className, {
    [`tyro-btn-${type}`]: type,
    [`tyro-btn-${size}`]: size
  })

  if (type === 'link' && href) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...rest}>
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
      onClick={handleClick}
    >
      {children}
    </button>
  )

  return buttonNode
}

export default Button
