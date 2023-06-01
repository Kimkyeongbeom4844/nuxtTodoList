<template>
  <div id="wrap">
    <Header />
    <main id="body">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#body {
  flex: 1;
}
</style>
