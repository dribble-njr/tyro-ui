import React from 'react'
import Icon, { IconProps } from './icon'

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
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
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = '0 0 1024 1024',
    d: pathDefinition,
    defaultProps = {}
  } = options

  const Comp: React.FC<IconProps> = (props) => (
    <Icon viewBox={viewBox} {...defaultProps} {...props}>
      <path fill="currentColor" d={pathDefinition} />
    </Icon>
  )

  return Comp
}
