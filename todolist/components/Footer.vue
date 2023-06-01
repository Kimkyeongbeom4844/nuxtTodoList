<template>
  <footer>
    <img :src="logo" alt="개발진스" width="150" />
    <div>made by kimkyeonbeom4844</div>
  </footer>
</template>

<script setup lang="ts">
import logo from "@/assets/image/devJeans.png";
</script>

<style scoped>
footer {
  display: flex;
  background-color: var(---53baef-서브컬러);
  border-top: 1px solid var(---53baef-서브컬러);
}
</style>
