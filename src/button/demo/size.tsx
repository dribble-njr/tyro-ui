/**
 * description: 按钮有大、中、小三种尺寸，通过设置 `size` 为 `large` `middle` `small` 修改按钮尺寸，默认为 `middle`。
 */

import React, { useState } from 'react'
import { Button } from 'tyro-ui'
import type { ButtonSize } from 'tyro-ui/src/button/button'

const App: React.FC = () => {
  const [size, setSize] = useState<ButtonSize>('large') // default is 'middle'

  return (
    <>
      <input
        type="radio"
        id="large"
        name="size"
        value="large"
        checked={size === 'large'}
        onChange={(e) => setSize(e.target.value as ButtonSize)}
      ></input>
      <label htmlFor="large">大</label>

      <input
        type="radio"
        id="middle"
        name="size"
        value="middle"
        checked={size === 'middle'}
        onChange={(e) => setSize(e.target.value as ButtonSize)}
      ></input>
      <label htmlFor="middle">中</label>

      <input
        type="radio"
        id="small"
        name="size"
        value="small"
        checked={size === 'small'}
        onChange={(e) => setSize(e.target.value as ButtonSize)}
      ></input>
      <label htmlFor="small">小</label>

      <br></br>

      <Button type="primary" size={size}>
        Primary Button
      </Button>
      <Button type="danger" size={size}>
        Danger Button
      </Button>
      <Button size={size}>Defatult Button</Button>
      <Button type="dashed" size={size}>
        Dashed Button
      </Button>
      <Button type="text" size={size}>
        Text Button
      </Button>
      <Button type="link" size={size}>
        Link Button
      </Button>
    </>
  )
}

export default App
