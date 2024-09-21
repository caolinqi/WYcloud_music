<template>
  <Wrapper :title="props.data.name">
    <BetterScroll
      :config="{ scrollX: true, screenY: false }"
      :dep="props.data"
      class="flex flex-row items-center"
    >
      <div
        v-for="item in props.data.children"
        :key="item.id"
        class="h-[44vw] w-[32vw] m-[2vw]"
      >
        <img class="w-[32vw] h-[32vw]" :src="item.imageUrl" />
        <div class="w-[32vw] overflow-hidden line-clamp-2 text-ellipsis">
          {{ item.title }}
        </div>
      </div>
    </BetterScroll>
  </Wrapper>
</template>

<script setup>
import BetterScroll from "../../../components/BetterScroll.vue";
import Wrapper from "../../../components/Wrapper.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
console.log(props.data);
</script>
<style scoped></style>
