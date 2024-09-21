<template>
  <Search></Search>
  <BlockType
    v-for="item in pageData"
    :data="item"
    :key="item.blockCode"
  ></BlockType>
</template>
<script setup>
import { ref } from "vue";
import { getHomePageData } from "../../api";
import BlockType from "./children/BlockType.vue";
import Search from "./children/Search.vue";
const pageData = ref([]);
getHomePageData().then((res) => {
  pageData.value = res.data.data.blocks;
  console.log(pageData.value);
});
</script>
