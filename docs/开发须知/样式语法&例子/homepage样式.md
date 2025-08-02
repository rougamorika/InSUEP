---
title: Homepage 样式
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

# Homepage 样式

## 概述

Homepage 样式用于设置首页特定的样式，主要调整操作按钮、功能特性、图标等元素的尺寸和布局，确保在不同设备上都有良好的显示效果。

## 语法

### `.vp-project-home`

首页主容器样式。

```scss
.vp-project-home {
  // adjust action button size
  .vp-action {
    padding: 0.5rem 1.25rem;
    font-size: 1.25rem;

    @media (max-width: hope-config.$tablet) {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }

  // adjust icon size
  .vp-feature-title {
    text-align: center;
    margin-bottom: 0;

    .vp-icon {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 auto 1rem;
    }
  }

  // adjust feature breakpoint
  .vp-feature-item {
    flex-basis: calc(20% - 2rem);
    padding: 0.5rem;

    @media (max-width: hope-config.$laptop) {
      flex-basis: calc(25% - 2rem);
      padding: 0.5rem;
    }

    @media (max-width: hope-config.$tablet) {
      flex-basis: calc(33.333% - 2rem);
      padding: 0.5rem;
    }

    @media (max-width: hope-config.$mobile) {
      flex-basis: calc(50% - 2rem);
      padding: 0.5rem;
    }

    @media (min-width: hope-config.$pc) {
      flex-basis: calc(16.666% - 2rem);
      padding: 0.5rem;
    }
  }

  // adjust homepage content
  .theme-hope-content {
    margin-top: 1rem;
  }
}
```

## 属性说明

| 类名                  | 主要属性                                        | 说明                 |
| --------------------- | ----------------------------------------------- | -------------------- |
| `.vp-action`          | `padding: 0.5rem 1.25rem`, `font-size: 1.25rem` | 操作按钮，响应式尺寸 |
| `.vp-feature-title`   | `text-align: center`, `margin-bottom: 0`        | 特性标题，居中对齐   |
| `.vp-icon`            | `width: 2.5rem`, `height: 2.5rem`               | 特性图标，固定尺寸   |
| `.vp-feature-item`    | `flex-basis: calc(20% - 2rem)`                  | 特性项，响应式宽度   |
| `.theme-hope-content` | `margin-top: 1rem`                              | 首页内容，顶部边距   |

## 响应式断点

| 断点                  | 设备       | 特性项宽度             | 每行项目数 |
| --------------------- | ---------- | ---------------------- | ---------- |
| `hope-config.$pc`     | 桌面及以上 | `calc(16.666% - 2rem)` | 6 个       |
| 默认                  | 笔记本     | `calc(20% - 2rem)`     | 5 个       |
| `hope-config.$laptop` | 平板       | `calc(25% - 2rem)`     | 4 个       |
| `hope-config.$tablet` | 大手机     | `calc(33.333% - 2rem)` | 3 个       |
| `hope-config.$mobile` | 小手机     | `calc(50% - 2rem)`     | 2 个       |

## 使用例子

### 首页操作按钮

```html
<div class="vp-project-home">
  <div class="vp-actions">
    <a href="/guide" class="vp-action primary"> 开始使用 </a>
    <a href="/docs" class="vp-action"> 查看文档 </a>
  </div>
</div>
```

### 首页特性展示

```html
<div class="vp-project-home">
  <div class="vp-features">
    <div class="vp-feature-item">
      <div class="vp-feature-title">
        <div class="vp-icon">📚</div>
        <h3>学习资源</h3>
      </div>
      <p>丰富的学习资料和教程</p>
    </div>
    <div class="vp-feature-item">
      <div class="vp-feature-title">
        <div class="vp-icon">🎓</div>
        <h3>学术支持</h3>
      </div>
      <p>专业的学术指导和服务</p>
    </div>
    <div class="vp-feature-item">
      <div class="vp-feature-title">
        <div class="vp-icon">🏫</div>
        <h3>校园生活</h3>
      </div>
      <p>多彩的校园生活体验</p>
    </div>
  </div>
</div>
```

### 完整首页结构

```html
<div class="vp-project-home">
  <!-- 操作按钮 -->
  <div class="vp-actions">
    <a href="/guide" class="vp-action primary">开始使用</a>
    <a href="/docs" class="vp-action">查看文档</a>
  </div>

  <!-- 特性展示 -->
  <div class="vp-features">
    <div class="vp-feature-item">
      <div class="vp-feature-title">
        <div class="vp-icon">📚</div>
        <h3>学习资源</h3>
      </div>
      <p>丰富的学习资料和教程</p>
    </div>
    <div class="vp-feature-item">
      <div class="vp-feature-title">
        <div class="vp-icon">🎓</div>
        <h3>学术支持</h3>
      </div>
      <p>专业的学术指导和服务</p>
    </div>
    <div class="vp-feature-item">
      <div class="vp-feature-title">
        <div class="vp-icon">🏫</div>
        <h3>校园生活</h3>
      </div>
      <p>多彩的校园生活体验</p>
    </div>
  </div>

  <!-- 首页内容 -->
  <div class="theme-hope-content">
    <h2>欢迎来到上海电力大学</h2>
    <p>这里是您学习和成长的理想之地...</p>
  </div>
</div>
```

### 效果

- 操作按钮在不同设备上有不同的尺寸
- 特性项根据屏幕尺寸自动调整每行显示数量
- 图标居中显示，标题居中对齐
- 响应式设计确保在各种设备上的良好体验
- 首页内容有适当的顶部边距

## 样式特点

### 响应式设计

- 操作按钮在移动设备上尺寸较小
- 特性项根据屏幕宽度自动调整布局
- 确保在所有设备上都有良好的可读性

### 布局优化

- 特性标题居中对齐，图标居中显示
- 特性项使用弹性布局，自动换行
- 首页内容有适当的间距

### 交互体验

- 操作按钮有悬停效果
- 特性项有良好的视觉层次
- 图标和文字搭配清晰

## 注意事项

- 特性项数量建议控制在合理范围内
- 图标建议使用 2.5rem 的尺寸
- 确保在不同设备上的良好显示效果
- 操作按钮的文案应该简洁明了
- 使用 CSS 变量确保主题一致性
