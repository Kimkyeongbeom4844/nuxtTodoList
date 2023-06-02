<template>
  <header>
    <h1>Nuxt로 만들어본 투두리스트</h1>
    <button @click="router.push('/')">pinia 투두리스트</button>
    <button @click="router.push('/mysql')">mysql 투두리스트</button>
  </header>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: var(---53baef-서브컬러);
  font-size: var(--unnamed-font-size-18);
  font-weight: bold;
}
h1 {
  align-self: center;
}
</style>
