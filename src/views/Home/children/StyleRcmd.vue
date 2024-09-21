<template>
  <Wrapper :title="props.data.name">
    <BetterScroll :config="{ scrollX: true, screenY: false }" :dep="props.data">
      <div class="flex w-[200vw] flex-wrap">
        <div
          v-for="item in props.data.children"
          :key="item.id"
          class="flex w-[90vw] h-[18vw]"
        >
          <img
            :src="item.imageUrl"
            class="w-[15vw] h-[15vw] m-[2vw] rounded-[10%]"
            alt=""
          />
          <div class="flex flex-col w-[50vw]">
            <div class="text-[5vw] text-[#3e4659]">{{ item.song }}</div>
            <div class="text-[3vw]">{{ item.artists }}</div>
          </div>
        </div>
      </div>
    </BetterScroll>
  </Wrapper>
</template>
<script setup>
import Wrapper from "../../../components/Wrapper.vue";
import BetterScroll from "../../../components/BetterScroll.vue";
import { defineProps } from "vue";

const props = defineProps({
  data: {
    require: true,
    type: Object,
  },
});
console.log(props.data);
</script>
