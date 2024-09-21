<template>
  <div
    ref="wrapper"
    :class="`overflow-hidden ${props.config.scrollX ? 'flex' : ''}`"
  >
    <div :class="`${props.config.scrollX ? 'flex' : ''}`">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import BScroll from "@better-scroll/core";
import { ref, onMounted, onBeforeUnmount, watchEffect, nextTick } from "vue";
const props = defineProps({
  dep: {
    require: true,
  },
  config: {
    type: Object,
    default() {
      return {
        scrollX: false,
        scrollY: true,
      };
    },
  },
});

const wrapper = ref(null);
let bs = null;

onMounted(() => {
  bs = new BScroll(wrapper.value, props.config);
});
watchEffect(() => {
  //   console.log(props.dep);
  nextTick(() => bs.refresh());
});
onBeforeUnmount(() => bs.destroy());
</script>
