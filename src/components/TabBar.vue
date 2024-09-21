<!-- <template>
  <div class="tab-bar">
    <div>
      <Icon
        icon="ri:netease-cloud-music-fill"
        width="7vw"
        height="7vw"
        style="color: #eb4e3c"
      />
      <div class="text-[3vw]">发现</div>
    </div>
    <div>
      <Icon
        icon="mingcute:radar-line"
        width="7vw"
        height="7vw"
        style="color: black"
      />
      <div class="text-[3vw]">播客</div>
    </div>
    <div>
      <Icon
        icon="majesticons:music-line"
        width="7vw"
        height="7vw"
        style="color: black"
      />
      <div class="text-[3vw]">我的</div>
    </div>
    <div>
      <Icon
        icon="icon-park-outline:people-safe-one"
        width="7vw"
        height="7vw"
        style="color: black"
      />
      <div class="text-[3vw]">关注</div>
    </div>
    <div>
      <Icon
        icon="fluent:chat-multiple-16-regular"
        width="7vw"
        height="7vw"
        style="color: black"
      />
      <div class="text-[3vw]">社区</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const currentIndex = ref(0);

function changeTab(index) {
  currentIndex.value = index;
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  position: sticky;
  bottom: 0;
  background-color: #f5f5f5;
}

.active {
  color: red;
}
</style> -->

<template>
  <div class="tab-bar">
    <div
      @click="changeTab(0, '/discover')"
      :class="{ active: currentIndex === 0 }"
    >
      <Icon
        icon="ri:netease-cloud-music-fill"
        width="7vw"
        height="7vw"
        :style="{ color: currentIndex === 0 ? '#eb4e3c' : 'black' }"
      />
      <div class="text-[3vw]">发现</div>
    </div>
    <div
      @click="changeTab(1, '/podcast')"
      :class="{ active: currentIndex === 1 }"
    >
      <Icon
        icon="mingcute:radar-line"
        width="7vw"
        height="7vw"
        :style="{ color: currentIndex === 1 ? '#eb4e3c' : 'black' }"
      />
      <div class="text-[3vw]">播客</div>
    </div>
    <div @click="changeTab(2, '/my')" :class="{ active: currentIndex === 2 }">
      <Icon
        icon="majesticons:music-line"
        width="7vw"
        height="7vw"
        :style="{ color: currentIndex === 2 ? '#eb4e3c' : 'black' }"
      />
      <div class="text-[3vw]">我的</div>
    </div>
    <div
      @click="changeTab(3, '/follow')"
      :class="{ active: currentIndex === 3 }"
    >
      <Icon
        icon="icon-park-outline:people-safe-one"
        width="7vw"
        height="7vw"
        :style="{ color: currentIndex === 3 ? '#eb4e3c' : 'black' }"
      />
      <div class="text-[3vw]">关注</div>
    </div>
    <div
      @click="changeTab(4, '/community')"
      :class="{ active: currentIndex === 4 }"
    >
      <Icon
        icon="fluent:chat-multiple-16-regular"
        width="7vw"
        height="7vw"
        :style="{ color: currentIndex === 4 ? '#eb4e3c' : 'black' }"
      />
      <div class="text-[3vw]">社区</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue/dist/iconify.js";

const currentIndex = ref(0);
const router = useRouter();

function changeTab(index, route) {
  currentIndex.value = index;
  console.log(currentIndex.value);
  router.push(route);
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  position: sticky;
  bottom: 0;
  background-color: #f5f5f5;
}

.active {
  color: red;
}
</style>
