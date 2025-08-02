---
title: Index 样式
author:
  - EmptyDust
date: 2025-08-02
---

::: warning
此样式为基本页面样式，请勿使用。
:::
::: warning
缺少可用例子
:::

# Index 样式

## 概述

Index 样式是主样式文件，整合了所有组件样式，并包含一些全局样式调整。主要包括特性项悬停效果、目录图标样式和聊天机器人按钮样式。

## 语法

### 导入组件样式

```scss
@use "components";
@use "homepage";
```

### `.vp-feature-item.link:hover`

特性项链接悬停效果。

```scss
.vp-feature-item.link:hover {
  transform: scale(0.95);

  &::before {
    display: none;
  }
}
```

### `.vp-catalog-wrapper`

目录包装器样式。

```scss
.vp-catalog-wrapper {
  .icon {
    width: 1.25em;
    vertical-align: middle;
    height: 1.25em;
    margin-right: 0.25em;
  }
}
```

### `#dify-chatbot-bubble-button`

聊天机器人按钮样式。

```scss
#dify-chatbot-bubble-button {
  background-color: var(--vp-c-accent) !important;
}
```

## 属性说明

| 类名                          | 主要属性                               | 说明                   |
| ----------------------------- | -------------------------------------- | ---------------------- |
| `.vp-feature-item.link:hover` | `transform: scale(0.95)`               | 悬停时缩小效果         |
| `.vp-catalog-wrapper .icon`   | `width: 1.25em`, `height: 1.25em`      | 目录图标，固定尺寸     |
| `#dify-chatbot-bubble-button` | `background-color: var(--vp-c-accent)` | 聊天机器人按钮，主题色 |

## 使用例子

### 特性项链接

```html
<div class="vp-feature-item link">
  <a href="/feature1">
    <div class="vp-icon">📚</div>
    <h3>学习资源</h3>
    <p>丰富的学习资料</p>
  </a>
</div>
```

### 目录结构

```html
<div class="vp-catalog-wrapper">
  <div class="catalog-item">
    <span class="icon">📖</span>
    <span>第一章</span>
  </div>
  <div class="catalog-item">
    <span class="icon">📝</span>
    <span>第二章</span>
  </div>
  <div class="catalog-item">
    <span class="icon">🎓</span>
    <span>第三章</span>
  </div>
</div>
```

### 聊天机器人集成

```html
<!-- 聊天机器人会自动添加按钮 -->
<div id="dify-chatbot-bubble-button">
  <!-- 聊天机器人内容 -->
</div>
```

### 完整页面结构

```html
<!DOCTYPE html>
<html>
  <head>
    <title>InSUEP - 上海电力大学指南</title>
  </head>
  <body>
    <!-- 特性项 -->
    <div class="vp-features">
      <div class="vp-feature-item link">
        <a href="/guide">
          <div class="vp-icon">📚</div>
          <h3>新生指南</h3>
          <p>帮助新生快速适应大学生活</p>
        </a>
      </div>
      <div class="vp-feature-item link">
        <a href="/campus">
          <div class="vp-icon">🏫</div>
          <h3>校园介绍</h3>
          <p>了解校园环境和设施</p>
        </a>
      </div>
    </div>

    <!-- 目录 -->
    <div class="vp-catalog-wrapper">
      <div class="catalog-item">
        <span class="icon">📖</span>
        <span>入学准备</span>
      </div>
      <div class="catalog-item">
        <span class="icon">📝</span>
        <span>学习指南</span>
      </div>
      <div class="catalog-item">
        <span class="icon">🎓</span>
        <span>校园生活</span>
      </div>
    </div>

    <!-- 聊天机器人会自动添加 -->
    <div id="dify-chatbot-bubble-button"></div>
  </body>
</html>
```

### 效果

- 特性项链接悬停时有缩小效果
- 目录图标统一尺寸，垂直居中对齐
- 聊天机器人按钮使用主题强调色
- 所有样式与主题保持一致

## 样式特点

### 交互效果

- 特性项链接悬停时有缩放动画
- 移除悬停时的伪元素显示
- 提供良好的视觉反馈

### 图标统一

- 目录图标使用统一的尺寸
- 图标与文字垂直居中对齐
- 保持一致的视觉风格

### 主题适配

- 聊天机器人按钮使用主题强调色
- 所有颜色都使用 CSS 变量
- 支持明暗主题切换

## 组件集成

### 导入的组件

- `components` - 所有组件样式
- `homepage` - 首页特定样式

### 全局调整

- 特性项悬停效果优化
- 目录图标样式统一
- 第三方组件主题适配

## 注意事项

- 这是主样式文件，会导入所有其他样式
- 特性项链接需要添加 `link` 类才能获得悬停效果
- 目录图标建议使用 1.25em 的尺寸
- 聊天机器人按钮会自动应用主题色
- 确保所有样式与主题保持一致
