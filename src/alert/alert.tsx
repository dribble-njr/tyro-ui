import React from 'react'

export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error'
  closable?: boolean
  message?: React.ReactNode
  description?: React.ReactNode
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  afterClose?: () => void
  showIcon?: boolean
  icon?: React.ReactNode
  className?: string
  banner?: boolean
  closeIcon?: React.ReactNode
  action?: React.ReactNode
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Alert: React.FC<AlertProps> = () => {
  return <>Alert</>
}

export default Alert
