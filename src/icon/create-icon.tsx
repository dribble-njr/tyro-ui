import React from 'react'
import Icon, { IconProps } from './icon'
import classNames from 'classnames'

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 1024 1024"
   */
  viewBox?: string
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: IconProps
  name?: string
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = '0 0 1024 1024',
    d: pathDefinition,
    defaultProps = {},
    name
  } = options

  const classes = classNames('tyro-icon', defaultProps.className, {
    [`tyro-icon-loading`]: name === 'loading'
  })

  const Comp: React.FC<IconProps> = (props) => (
    <Icon viewBox={viewBox} {...defaultProps} {...props} className={classes}>
      <path fill="currentColor" d={pathDefinition} />
    </Icon>
  )

  return Comp
}
