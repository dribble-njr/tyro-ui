import type { FC, ReactNode } from 'react'
import { useRef, useEffect } from 'react'

export interface LoadMoreType {
  isLoading: boolean
  hasMore: boolean
  options?: IntersectionObserverInit
  loadingElement?: ReactNode
  noMoreElement?: ReactNode
  onLoadMore: () => void
}

const LoadMore: FC<LoadMoreType> = ({
  onLoadMore,
  isLoading,
  hasMore,
  options,
  loadingElement = '加载中...',
  noMoreElement = '没有更多内容了'
}) => {
  const sentinel = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (!isLoading && hasMore && entry.isIntersecting) {
            onLoadMore()
          }
        },
        // 触发阈值，到达离底部 100px
        { rootMargin: '100px' }
      )
    }, options)

    if (sentinel.current) {
      observer.observe(sentinel.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [onLoadMore, options, isLoading, hasMore])

  return (
    <div ref={sentinel}>
      {isLoading ? loadingElement : !hasMore ? noMoreElement : null}
    </div>
  )
}

export default LoadMore
