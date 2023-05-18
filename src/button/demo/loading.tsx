/**
 * description: 点击按钮来加载数据，并向用户反馈加载状态，处于加载状态时无法点击。通过设置 `loading` 属性为 `true` 来显示加载中状态。
 */

import React, { useState } from 'react'
import { Button } from 'tyro-ui'

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const handleClick = () => {
    setLoading(!isLoading)
  }

  return (
    <>
      <Button type="primary" loading={isLoading} onClick={handleClick}>
        加载状态
      </Button>
    </>
  )
}

export default App
