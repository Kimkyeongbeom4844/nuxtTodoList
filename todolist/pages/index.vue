<template>
  <form @submit.prevent="onSubmitInputText">
    <input required v-model="inputText" />
    <button>추가</button>
  </form>
  <ul>
    <li v-for="(v, i) of listStore.list">
      {{ v }}
      <button @click="onClickDeleteButton(i)">ㅁㄴㅇ</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useListStore } from "@/stores/list";
const listStore = useListStore();
const inputText = ref("");
const onSubmitInputText = (e: Event) => {
  listStore.addList(inputText.value);
  inputText.value = "";
};
const onClickDeleteButton = (v: number) => {
  listStore.deleteList(v);
};
</script>

<style scoped></style>
