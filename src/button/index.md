---
description: tyro ui Button 按钮
group:
  title: 通用
  order: 1
keywords: ['tyro ui', 'Button', '按钮']
toc: content
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Tyro UI 中我们提供了六种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 危险按钮：删除/移动/修改权限等危险操作，一般需要二次确认。
- 链接按钮：一般用于链接，即导航至某位置。

以及两种状态属性与上面配合使用。

- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

<code src="./demo/basic.tsx">按钮类型</code>
<code src="./demo/size.tsx">不同大小</code>
<code src="./demo/disabled.tsx">禁用状态</code>
<code src="./demo/loading.tsx">加载状态</code>

## API

按钮的属性说明如下：

| 属性     | 说明                                                      | 类型                                                               | 默认值    |
| -------- | --------------------------------------------------------- | ------------------------------------------------------------------ | --------- | --- |
| disabled | 设置按钮禁用状态                                          | `boolean`                                                          | `false`   |     |
| loading  | 设置按钮加载状态                                          | `boolean`                                                          | `false`   |
| type     | 设置按钮类型                                              | `primary` \| `default` \| `dashed` \| `text` \| `danger` \| `link` | `defalut` |
| size     | 设置按钮大小                                              | `large` \| `middle` \| `small`                                     | `middle`  |
| onClick  | 点击按钮的回调                                            | (event: MouseEvent) => void                                        | -         |
| href     | 点击跳转的地址，指定此属性 `button` 的行为和 `a` 链接一致 | `string`                                                           | -         |
| target   | 相当于 `a` 链接的 `target` 属性，`href` 存在时生效        | `string `                                                          | -         |
