<template>
  <BetterScroll :config="{ scrollX: true, scrollY: false }" :dep="props.data">
    <div class="flex" :style="`width:${props.data.length * 20}vw`">
      <div
        @ckick="emit('click', item, index)"
        v-for="(item, index) in props.data"
        :key="item.name"
        class="flex flex-col items-center w-[20vw]"
      >
        <div class="relative">
          <img :src="item.iconUrl" class="w-[9vw] filter" alt="" />
          <span
            class="text-[2.564vw] text-white absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            v-if="index === 0"
          >
            {{ new Date().getDate() }}
          </span>
        </div>
        <span class="text-[2.99vw] text-[#676c6c]">{{ item.name }}</span>
      </div>
    </div>
  </BetterScroll>
</template>
<script setup>
import { defineEmits } from "vue";
import BetterScroll from "../../../components/BetterScroll.vue";

const props = defineProps({
  data: {
    type: Array,
    require: true,
  },
});
// console.log(props.data);

const emit = defineEmits(["ckick"]);
</script>
<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/><filter></svg>#colorize");
}
</style>
