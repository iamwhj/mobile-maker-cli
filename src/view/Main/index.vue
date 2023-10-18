<script setup>
import { ref } from 'vue'
import Left from './Left.vue'
import Scene from './Scene.vue'
import Right from './Right.vue'

const componentFileList = import.meta.globEager('@/components/**/index.js')
const componentsName = ref([])
for (const key in componentFileList) {
  const component = componentFileList[key].default
  // 注册组件
  window.Vue.component(component.name, component)
  window.Vue.component(component.name + '-config', component.Config)
  // 获取信息
  const componentInfo = component.info
  componentsName.value.push({
      name: component.name,
      title: componentInfo.title,
      icon: componentInfo.icon
  })
}
</script>

<template>
  <div class="main">
    <Left :components="componentsName" />
    <Scene />
    <Right />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 30px);
}
.left {
  width: 320px;
}
.right {
  width: 320px;
}
.scene {
  flex-grow: 1;
}
</style>
