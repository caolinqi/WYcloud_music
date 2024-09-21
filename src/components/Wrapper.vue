<template>
  <div>
    <div class="flex justify-between p-[2vw] items-center">
      <div class="flex items-center">
        <Icon icon="ri:reset-right-fill" v-show="title.includes('说唱')" />
        <span class="text-[#3e4659] font-bold">{{ title }}</span>
        <div
          class="flex justify-center items-center w-[15vw] h-[6vw] bg-[#ebedf1] rounded-[6vw] ml-3"
          v-show="title.includes('说唱')"
        >
          <Icon
            icon="gravity-ui:triangle-right-fill"
            width="12"
            height="12"
            style="color: black"
          />
          <span>播放</span>
        </div>
        <Icon
          icon="lets-icons:expand-right"
          v-show="title.includes('推荐歌单')"
        />
      </div>
      <Icon icon="ant-design:more-outlined" class="text-[4vw] text-[#9195a1]" />
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
