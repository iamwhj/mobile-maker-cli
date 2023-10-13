<script setup>
import LkButton from '@/components/lk-button'
import LkText from '@/components/lk-text'
</script>

<template>
    <div class="scene">
        <div class="model">
          Canvas
          <LkButton></LkButton>
          <LkText></LkText>
        </div>
    </div>
</template>

<style scoped>
  .model {
    width: 375px;
    height: 667px;
    background: lightcyan;
    margin: 60px auto;
  }
</style>
