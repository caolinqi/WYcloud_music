<template>
  <Swiper
    :loop="true"
    :autoplay="true"
    :pagination="true"
    :modules="[Autoplay, Pagination]"
  >
    <SwiperSlide v-for="item in props.data" :key="item">
      <img :src="item" alt="" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const props = defineProps({
  data: {
    type: Array,
    require: true,
  },
});
// console.log(props.data);
</script>
