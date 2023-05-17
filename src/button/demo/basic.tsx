/**
 * description: 按钮有六种类型：主按钮、危险按钮、次按钮、虚线按钮、文本按钮和链接按钮。
 */

import React from 'react'
import { Button } from 'tyro-ui'

const App: React.FC = () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button type="danger">Danger Button</Button>
      <Button>Defatult Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  )
}

export default App
