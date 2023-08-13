import React from 'react'

export interface IconProps
  extends React.ClassAttributes<SVGAElement>,
    React.SVGAttributes<SVGElement> {
  className?: string
  style?: React.CSSProperties
  viewBox?: string
  children?: React.ReactNode
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, style, viewBox = '0 0 1024 1024', color, children } = props

  const styles = {
    width: '36px',
    height: '36px',
    display: 'inline-block',
    lineHeight: '36px',
    color: color ? color : '#555555',
    ...style
  }

  return (
    <svg
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      {children}
    </svg>
  )
}

export default Icon
