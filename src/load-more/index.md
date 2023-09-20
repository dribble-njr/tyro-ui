---
description: tyro ui LoadMore 加载更多
title: LoadMore 加载更多
group:
  title: 数据展示
  order: 5
keywords: ['tyro ui', 'LoadMore', '加载更多']
toc: content
demo:
  cols: 2
---

# LoadMore 加载更多

用于下拉加载更多数据。

## 代码演示

<code src="./demo/basic.tsx">基本使用</code>

## API

加载更多的属性说明如下：

| 属性           | 说明                            | 类型                     | 默认值                  |
| -------------- | ------------------------------- | ------------------------ | ----------------------- |
| isLoading      | 是否处于加载状态                | boolean                  | false                   |
| hasMore        | 是否还有更多                    | boolean                  | false                   |
| options        | IntersectionObserver 初始化配置 | IntersectionObserverInit | { rootMargin: '100px' } |
| loadingElement | 加载中的提示元素                | ReactNode                | '加载中...'             |
| noMoreElement  | 加载完成的提示元素              | ReactNode                | '没有更多内容了'        |
| onLoadMore     | 加载中的回调函数                | () => void               | -                       |
