---
title: Card 样式
author:
  - EmptyDust
date: 2025-08-02
---

::: warning
缺少可用例子
:::

## 概述

Card 样式用于创建卡片组件，包含封面图片、标题、描述和相关信息等功能。支持响应式设计，在不同屏幕尺寸下有不同的显示效果。

## 语法

### `.innenu-card`

卡片主容器样式。

```scss
.innenu-card {
  display: block;
  overflow: hidden;
  color: inherit;
  max-width: 520px;
  margin: 12px 16px;
  border-radius: 16px;
  background-color: var(--vp-c-control);
  box-shadow: 1px 1px 2px 3px var(--vp-c-shadow);
  text-align: left;

  @media (min-width: hope-config.$tablet) {
    margin: 12px auto;
  }

  &:hover {
    background-color: var(--vp-c-control-hover) !important;
    text-decoration: none !important;
  }
}
```

### `.innenu-card-cover`

卡片封面图片样式。

```scss
.innenu-card-cover {
  width: 100%;
  max-height: 220px;
}
```

### `.innenu-card-detail`

卡片详情容器样式。

```scss
.innenu-card-detail {
  margin: 0;
  padding: 12px 16px;
}
```

### `.innenu-card-title`

卡片标题样式。

```scss
.innenu-card-title {
  font-weight: bold;
  font-size: 17px;

  @media (min-width: hope-config.$tablet) {
    font-size: 20px;
  }
}
```

### `.innenu-card-desc`

卡片描述样式。

```scss
.innenu-card-desc {
  margin-top: 8px;
  color: var(--vp-c-text-mute);
  font-size: 14px;
  line-height: 1.4;

  @media (min-width: hope-config.$tablet) {
    margin-top: 10px;
    font-size: 18px;
  }
}
```

### `.innenu-card-info`

卡片信息容器样式。

```scss
.innenu-card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: right;
}
```

### `.innenu-card-logo`

卡片 logo 样式。

```scss
.innenu-card-logo {
  width: 28px;
  height: 28px;

  @media (min-width: hope-config.$tablet) {
    width: 40px;
    height: 40px;
  }
}
```

### `.innenu-card-name`

卡片名称样式。

```scss
.innenu-card-name {
  margin: 2px auto;
  color: var(--vp-c-text-subtle);
  font-size: 12px;

  @media (min-width: hope-config.$tablet) {
    font-size: 16px;
  }
}
```

## 属性说明

| 类名                  | 主要属性                                           | 说明                       |
| --------------------- | -------------------------------------------------- | -------------------------- |
| `.innenu-card`        | `max-width: 520px`, `border-radius: 16px`          | 主容器，最大宽度，圆角边框 |
| `.innenu-card-cover`  | `width: 100%`, `max-height: 220px`                 | 封面图片，全宽，限制高度   |
| `.innenu-card-detail` | `padding: 12px 16px`                               | 详情容器，内边距           |
| `.innenu-card-title`  | `font-weight: bold`, `font-size: 17px`             | 标题，粗体，响应式字体     |
| `.innenu-card-desc`   | `color: var(--vp-c-text-mute)`, `line-height: 1.4` | 描述，使用主题色，行高     |
| `.innenu-card-info`   | `display: flex`, `float: right`                    | 信息容器，弹性布局，右浮动 |
| `.innenu-card-logo`   | `width: 28px`, `height: 28px`                      | Logo，响应式尺寸           |
| `.innenu-card-name`   | `color: var(--vp-c-text-subtle)`                   | 名称，使用主题色           |

## 响应式断点

| 断点                  | 设备         | 主要变化           |
| --------------------- | ------------ | ------------------ |
| `hope-config.$tablet` | 平板及以上   | 卡片居中，字体增大 |
| `hope-config.$laptop` | 笔记本及以上 | 进一步优化显示     |
| `hope-config.$pc`     | 桌面及以上   | 最佳显示效果       |

## 使用例子

### HTML 结构

```html
<a href="/link" class="innenu-card">
  <img class="innenu-card-cover" src="cover.jpg" alt="封面" />
  <div class="innenu-card-detail">
    <div class="innenu-card-title">卡片标题</div>
    <div class="innenu-card-desc">卡片描述信息，可以包含较长的文本内容</div>
    <div class="innenu-card-info">
      <img class="innenu-card-logo" src="logo.png" alt="Logo" />
      <div class="innenu-card-name">相关信息</div>
    </div>
  </div>
</a>
```

### 效果

- 卡片有圆角边框和阴影效果
- 封面图片自适应宽度，限制最大高度
- 标题和描述文字左对齐
- 右侧显示 logo 和相关信息
- 悬停时有背景色变化
- 响应式设计，在不同屏幕尺寸下有不同的显示效果

## 注意事项

- 卡片最大宽度为 520px，确保在不同设备上的可读性
- 使用 CSS 变量确保主题一致性
- 响应式设计确保在移动设备上的良好体验
- 悬停效果增强用户交互体验
