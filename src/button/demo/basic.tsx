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
