---
title: Account 样式
author:
  - EmptyDust
date: 2025-08-02
---

::: warning
缺少可用例子
:::

# Account 样式

## 概述

Account 样式用于创建用户账户信息展示组件，包含背景、头像、名称、描述和操作按钮等功能。

## 语法

### `.innenu-account`

账户组件的主容器。

```scss
.innenu-account {
  position: relative;
  overflow: hidden;
  width: 100%;
}
```

### `.innenu-account-background`

账户背景图片样式。

```scss
.innenu-account-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  filter: blur(8px);
}
```

### `.innenu-account-content`

账户内容容器。

```scss
.innenu-account-content {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
```

### `.innenu-account-logo`

账户头像样式。

```scss
.innenu-account-logo {
  max-width: 150px;
  height: 50%;
  max-height: 150px;
  margin-top: 12px;
}
```

### `.innenu-account-name`

账户名称样式。

```scss
.innenu-account-name {
  margin: 4px 0;
  font-size: 18px;
  text-shadow: 0 0 1px var(--vp-c-text-mute);
}
```

### `.innenu-account-desc`

账户描述样式。

```scss
.innenu-account-desc {
  max-width: 80%;
  margin: 4px auto;
  color: var(--vp-c-text-mute);
  font-size: 14px;
}
```

### `.innenu-account-action-list`

操作按钮列表容器。

```scss
.innenu-account-action-list {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 1rem 0;
  justify-content: space-evenly;
}
```

### `.innenu-account-action`

操作按钮样式。

```scss
.innenu-account-action {
  @include reset.button;
  overflow: hidden;
  margin: 6px;
  padding: 0;
  border-radius: 50%;
  line-height: 1;
  background-color: var(--vp-c-control);

  &:hover {
    background-color: var(--vp-c-control-hover);
  }
}
```

### `.innenu-account-icon`

操作按钮图标样式。

```scss
.innenu-account-icon {
  width: 2rem;
  height: 2rem;
  margin: 6px;
}
```

## 属性说明

| 类名                          | 主要属性                                         | 说明                         |
| ----------------------------- | ------------------------------------------------ | ---------------------------- |
| `.innenu-account`             | `position: relative`, `overflow: hidden`         | 主容器，相对定位，隐藏溢出   |
| `.innenu-account-background`  | `position: absolute`, `filter: blur(8px)`        | 背景图片，绝对定位，模糊效果 |
| `.innenu-account-content`     | `display: flex`, `flex-direction: column`        | 内容容器，垂直居中布局       |
| `.innenu-account-logo`        | `max-width: 150px`, `max-height: 150px`          | 头像，限制最大尺寸           |
| `.innenu-account-name`        | `font-size: 18px`, `text-shadow`                 | 名称，带阴影效果             |
| `.innenu-account-desc`        | `color: var(--vp-c-text-mute)`                   | 描述，使用主题色             |
| `.innenu-account-action-list` | `display: flex`, `justify-content: space-evenly` | 按钮列表，均匀分布           |
| `.innenu-account-action`      | `border-radius: 50%`, `background-color`         | 圆形按钮，带悬停效果         |
| `.innenu-account-icon`        | `width: 2rem`, `height: 2rem`                    | 图标，固定尺寸               |

## 使用例子

### HTML 结构

```html
<div class="innenu-account">
  <img class="innenu-account-background" src="background.jpg" alt="背景" />
  <div class="innenu-account-content">
    <img class="innenu-account-logo" src="avatar.jpg" alt="头像" />
    <div class="innenu-account-name">用户名</div>
    <div class="innenu-account-desc">用户描述信息</div>
    <div class="innenu-account-action-list">
      <button class="innenu-account-action">
        <img class="innenu-account-icon" src="icon1.png" alt="操作1" />
      </button>
      <button class="innenu-account-action">
        <img class="innenu-account-icon" src="icon2.png" alt="操作2" />
      </button>
    </div>
  </div>
</div>
```

### 效果

- 背景图片带有模糊效果
- 头像、名称、描述垂直居中显示
- 操作按钮为圆形，均匀分布
- 所有元素都有悬停效果

## 注意事项

- 背景图片会自动适应容器尺寸
- 使用 CSS 变量确保主题一致性
- 响应式设计，适配不同屏幕尺寸
