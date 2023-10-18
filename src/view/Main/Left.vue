<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  components: {
    type: Array,
    default: () => []
  }
})

const search = ref('')
const componentList = ref(props.components)
const filterComponent = (value) => {
  if (value) {
    // filter
    componentList.value = [value]
  } else {
    // reset
    componentList.value = props.components
  }
}


</script>

<template>
    <div class="left">
      <div class="title">组件列表</div>
      <el-select v-model="search" value-key="name" filterable clearable placeholder="组件快捷筛选" @change="filterComponent">
        <template #prefix>
          <div>
            123
          </div>
        </template>
        <el-option
          v-for="item in components"
          :key="item.name"
          :label="item.title || item.name"
          :value="item"
        />
      </el-select>
      <div class="list">
        <div class="item" v-for="item in componentList" :key="item.name">
          <div class="icon"></div>
          <div class="name">{{ item.title || item.name }}</div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .left {
    border-right: 1px solid #ccc;
    box-shadow: -6px 5px 7px 5px #ccc;
    .title {
      height: 30px;
      line-height: 30px;
      border: 1px solid #ccc;
      padding: 6px 0
    }
    .list {
      margin-top: 12px;
      display: flex;
      gap: 20px;
      .item {
        width: 64px;
        height: 86px;
        text-align: center;
        .icon {
          height: 64px;
          background: darkcyan;
        }
      }
    }
  }
</style>
