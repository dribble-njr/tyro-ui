import { FC, useEffect, useState } from 'react'
import { LoadMore } from 'tyro-ui'

interface Item {
  id: number
  content: string
}

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [data, setData] = useState<Item[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  // 模拟请求
  const fetchData = async () => {
    setIsLoading(true)
    try {
      // 模拟异步操作
      const newData = (await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            Array.from({ length: 10 }, (_, i) => ({
              id: (currentPage - 1) * 10 + i + 1,
              content: `Item ${(currentPage - 1) * 10 + i + 1}`
            }))
          )
        }, 1000)
      )) as Item[]

      setData((prevData) => [...prevData, ...newData])
      // 假设只有5页数据
      setHasMore(currentPage < 5)
      setCurrentPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData() // 初始化时加载一些数据
  }, [])

  return (
    <div style={{ height: '200px', overflow: 'auto' }}>
      {data.map((item) => (
        <p key={item.id}>{item.content}</p>
      ))}
      <LoadMore
        isLoading={isLoading}
        hasMore={hasMore}
        onLoadMore={fetchData}
      />
    </div>
  )
}

export default App
