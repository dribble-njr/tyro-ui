---
description: tyro ui Transition 动画效果
title: Transition 动画效果
group:
  title: 视觉
  order: 2
keywords: ['tyro ui', 'Transition', '动画效果']
toc: content
demo:
  cols: 2
---

# Transition

Transition 动画效果

## 何时使用

当你想要使页面上某个元素消失或显示的时候平滑的过渡使用。

在 Tyro UI 中我们提供了 4 种动画。

- 从上进入与离开：元素向上消失，从上面进入。
- 从左进入与离开：元素向左消失，从左面进入。
- 从下进入与离开：元素向下消失，从下面进入。
- 从右进入与离开：元素向右消失，从右面进入。

## 代码演示

<code src="./demo/in-top.tsx">向上消失</code>
<code src="./demo/in-left.tsx">向左消失</code>
<code src="./demo/in-bottom.tsx">向下消失</code>
<code src="./demo/in-right.tsx">向右消失</code>

## API

动画的属性说明如下：

| 属性       | 说明                            | 类型                                                                   | 默认值        | 版本 |
| ---------- | ------------------------------- | ---------------------------------------------------------------------- | ------------- | ---- |
| in         | 设置元素显示隐藏状态            | `boolean`                                                              | `无`          |      |
| timeout    | 设置动画持续时间                | `Number`                                                               | `无`          |
| animation  | 设置动画进行方向                | `zoom-in-top` \| `zoom-in-left` \| `zoom-in-bottom` \| `zoom-in-right` | `zoom-in-top` |
| wrapper    | 是否将元素内容包裹在一个 div 中 | `boolean`                                                              | `fasle`       |
| classNames | 是否使用自定义动画类名          | `String`                                                               | 无            |
