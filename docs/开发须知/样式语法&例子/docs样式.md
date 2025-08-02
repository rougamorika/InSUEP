---
title: Docs 样式
author:
  - EmptyDust
date: 2025-08-02
---

::: warning
缺少可用例子
:::

# Docs 样式

## 概述

Docs 样式用于创建文档链接组件，提供统一的文档展示样式，包含图标和文本内容。

## 语法

### `.innenu-doc`

文档链接主容器样式。

```scss
.innenu-doc {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: var(--vp-c-control);
  color: var(--vp-c-text);
  line-height: 1.2;
  font-size: 17px;

  &:hover {
    background-color: var(--vp-c-control-hover);
    text-decoration: none !important;
  }
}
```

### `.innenu-doc-icon`

文档图标样式。

```scss
.innenu-doc-icon {
  flex: none;
  width: 32px;
  height: 32px;
  margin-right: 16px;
}
```

## 属性说明

| 类名               | 主要属性                                    | 说明                       |
| ------------------ | ------------------------------------------- | -------------------------- |
| `.innenu-doc`      | `display: flex`, `align-items: center`      | 主容器，弹性布局，垂直居中 |
| `.innenu-doc`      | `padding: 8px 16px`, `border-radius: 8px`   | 内边距，圆角边框           |
| `.innenu-doc`      | `background-color: var(--vp-c-control)`     | 背景色，使用主题变量       |
| `.innenu-doc`      | `font-size: 17px`, `line-height: 1.2`       | 字体大小，行高             |
| `.innenu-doc-icon` | `flex: none`, `width: 32px`, `height: 32px` | 图标，固定尺寸，不伸缩     |

## 使用例子

### HTML 结构

```html
<a href="/docs/guide" class="innenu-doc">
  <img class="innenu-doc-icon" src="icon.png" alt="文档图标" />
  用户指南文档
</a>
```

### 多个文档链接

```html
<div>
  <a href="/docs/guide" class="innenu-doc">
    <img class="innenu-doc-icon" src="guide-icon.png" alt="指南图标" />
    用户指南
  </a>
  <a href="/docs/api" class="innenu-doc">
    <img class="innenu-doc-icon" src="api-icon.png" alt="API图标" />
    API 文档
  </a>
  <a href="/docs/tutorial" class="innenu-doc">
    <img class="innenu-doc-icon" src="tutorial-icon.png" alt="教程图标" />
    教程文档
  </a>
</div>
```

### 效果

- 文档链接以卡片形式展示
- 左侧显示图标，右侧显示文本
- 悬停时有背景色变化效果
- 圆角边框，现代化的外观
- 图标和文本垂直居中对齐

## 样式特点

### 布局

- 使用 Flexbox 布局，图标和文本水平排列
- 图标固定尺寸，不参与伸缩
- 文本内容自动填充剩余空间

### 交互

- 悬停时背景色变化，提供视觉反馈
- 移除默认的下划线样式
- 保持链接的可访问性

### 主题适配

- 使用 CSS 变量确保与主题的一致性
- 背景色和文字颜色都使用主题变量
- 支持明暗主题切换

## 注意事项

- 图标建议使用 32x32 像素的尺寸
- 文本内容应该简洁明了
- 确保链接的可访问性，添加适当的 alt 属性
- 可以根据需要调整内边距和字体大小
