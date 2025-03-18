# MyButton 组件

这是一个示例按钮组件的文档。

## 示例用法

```vue
<template>
  <MyButton @click="handleClick">点击我</MyButton>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击了！');
    },
  },
};
</script>