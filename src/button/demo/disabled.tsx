/**
 * description: 按钮可设置为禁用状态
 */

import React from 'react'
import { Button } from 'tyro-ui'

const App: React.FC = () => {
  return (
    <>
      <Button type="primary" disabled>
        Primary Button
      </Button>
      <Button type="danger" disabled>
        Danger Button
      </Button>
      <Button disabled>Defatult Button</Button>
      <Button type="dashed" disabled>
        Dashed Button
      </Button>
      <Button type="text" disabled>
        Text Button
      </Button>
      <Button type="link" disabled>
        Link Button
      </Button>
    </>
  )
}

export default App
