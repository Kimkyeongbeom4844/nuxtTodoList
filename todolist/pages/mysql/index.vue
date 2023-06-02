<template>
  <form v-if="data" @submit.prevent="onSubmitInputText">
    <input required v-model="inputText" />
    <button>추가</button>
  </form>
  <p v-if="pending">로딩 중</p>
  <div v-else-if="error">
    <p>서버와 통신에 문제가 있습니다. 다시 시도해주세요</p>
    <button @click="() => refresh()">재시도</button>
  </div>
  <ul v-else="data">
    <li v-if="data?.constructor === Array" v-for="i of data" :data-id="i.id">
      {{ i.title }}
      <button @click="onClickDeleteButton(i.id)">삭제</button>
    </li>
    <h1 v-else-if="data?.message === 'error'">DB가 없습니다.</h1>
  </ul>
</template>

<script setup lang="ts">
const inputText = ref("");
const {
  data,
  pending,
  error,
  refresh,
}: {
  data: Ref<any>;
  pending: Ref<boolean>;
  error: Ref<Error | null>;
  refresh: () => Promise<void>;
} = await useFetch("/api/list", {
  method: "GET",
  lazy: true,
  immediate: true,
  onResponse: ({ response }) => {
    console.log(response._data);
  },
});
const onSubmitInputText = async (e: Event) => {
  await useFetch("/api/list", {
    method: "POST",
    lazy: true,
    body: {
      title: inputText.value,
    },
    watch: false,
    onRequest: ({ request }) => {
      inputText.value = "";
    },
    onRequestError: ({ error }) => {
      console.log(error);
    },
    onResponse: ({ response }) => {
      console.log(response._data);
      refresh();
    },
    onResponseError: ({ response }) => {
      console.log(response._data);
      refresh();
    },
  });
};
const onClickDeleteButton = async (v: number) => {
  await useFetch("/api/list", {
    method: "POST",
    lazy: true,
    query: {
      id: v,
    },
    watch: false,
    onRequest: ({ request }) => {},
    onRequestError: ({ error }) => {
      console.log(error);
    },
    onResponse: ({ response }) => {
      console.log(response._data);
      refresh();
    },
    onResponseError: ({ response }) => {
      console.log(response._data);
      refresh();
    },
  });
};
</script>

<style scoped></style>
