import { defineStore } from "pinia";

export const useListStore = defineStore(
  "list",
  () => {
    const list: Ref<string[]> = ref([]);
    const addList = (v: string) => {
      list.value = [...list.value, v];
    };
    const deleteList = (v: number) => {
      // list.value = list.value.toSpliced(v, 1);
      list.value.splice(v, 1);
    };
    return { list, addList, deleteList };
  },
  {
    persist: true,
  }
);
