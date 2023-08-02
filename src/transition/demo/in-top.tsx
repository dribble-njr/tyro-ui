import React, { useState } from 'react'
import { Button, Transition } from 'tyro-ui'

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <>
      <Button onClick={() => setShow(!show)}>切换</Button>
      <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <div>
          <p>我会向上消失</p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </Transition>
    </>
  )
}

export default App
