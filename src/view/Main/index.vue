<script setup>
import Left from './Left.vue'
import Scene from './Scene.vue'
import Right from './Right.vue'
</script>

<template>
    <div class="main">
        <Left />
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
