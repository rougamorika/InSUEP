---
title: Location 样式
author:
  - EmptyDust
date: 2025-08-02
---

::: warning
缺少可用例子
:::

# Location 样式

## 概述

Location 样式用于设置地图或位置相关组件的样式，主要应用于 iframe 元素，提供圆角边框效果。

## 语法

### `.location-iframe`

位置 iframe 样式。

```scss
.location-iframe {
  border-radius: 0.5rem;
}
```

## 属性说明

| 类名               | 主要属性                | 说明                   |
| ------------------ | ----------------------- | ---------------------- |
| `.location-iframe` | `border-radius: 0.5rem` | 圆角边框，8px 圆角效果 |

## 使用例子

### HTML 结构

```html
<iframe
  class="location-iframe"
  src="https://maps.google.com/maps?q=上海电力大学&output=embed"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
>
</iframe>
```

### 地图嵌入示例

```html
<div class="location-container">
  <h3>学校位置</h3>
  <iframe
    class="location-iframe"
    src="https://maps.google.com/maps?q=上海电力大学临港校区&output=embed"
    width="100%"
    height="300"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
  >
  </iframe>
</div>
```

### 效果

- iframe 元素具有圆角边框效果
- 适用于地图、位置展示等场景
- 提供现代化的视觉效果

## 样式特点

### 边框效果

- 使用 `border-radius: 0.5rem` 创建圆角效果
- 圆角大小为 8px，提供适中的圆角效果
- 适用于各种 iframe 内容

### 兼容性

- 支持所有现代浏览器
- 不影响 iframe 内部内容的显示
- 与主题样式保持一致

## 注意事项

- 主要用于地图或位置相关的 iframe 元素
- 圆角效果适用于各种尺寸的 iframe
- 可以根据需要调整圆角大小
- 确保 iframe 内容能够正常显示
