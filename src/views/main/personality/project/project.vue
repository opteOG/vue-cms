<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="mode"
    />
    <Editor
      style="height: 80vh; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import { onBeforeUnmount, ref, shallowRef } from 'vue';
// @ts-ignore
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import type { IEditorConfig } from '@wangeditor/editor';

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 菜单配置
const editorConfig: Partial<IEditorConfig> = {
  MENU_CONF: {},
};

// 内容 HTML
const valueHtml = ref('<p></p>');

const toolbarConfig = {};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>

<style lang="less" scoped>
.project {
  #editor—wrapper {
    border: 1px solid #ccc;
    z-index: 100; /* 按需定义 */
  }
  #toolbar-container {
    border-bottom: 1px solid #ccc;
  }
  #editor-container {
    height: 80vh;
  }
}
</style>
