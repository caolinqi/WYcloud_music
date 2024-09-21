<template>
  <div class="flex justify-around items-center">
    <Icon
      icon="lets-icons:expand-left"
      width="16"
      height="16"
      style="color: black"
    />
    <div>歌单</div>
    <div class="flex justify-around w-[20vw]">
      <Icon
        icon="material-symbols:search"
        width="16"
        height="16"
        style="color: black"
      />
      <Icon
        icon="mingcute:more-2-fill"
        width="16"
        height="16"
        style="color: black"
      />
    </div>
  </div>
  <div>
    <div class="flex justify-around items-center">
      <img :src="songsheetData[0].imgUrl" alt="" class="w-[27vw] h-[27vw]" />
      <div>
        <div class="text-[4vw] w-[50vw]">{{ songsheetData[0].title }}</div>
        <div class="flex items-center">
          <img
            :src="songsheetData[0].avatarUrl"
            class="w-[6vw] h-[6vw] rounded-[50%]"
            alt=""
          />
          <div class="text-[3vw]">{{ songsheetData[0].author }}</div>
          <div
            class="w-[12vw] h-[6vw] rounded-[3vw] text-[#fff] bg-slate-400 text-[3vw] text-center leading-[6vw]"
          >
            +关注
          </div>
        </div>
        <div>
          <div>{{ songsheetData[0].tag }}</div>
        </div>
      </div>
      <div class="bg-gray-400 w-[3vw] h-[3vw] rounded-[50%] flex items-center">
        <Icon
          icon="ic:outline-expand-more"
          width="16"
          height="16"
          style="color: black"
        />
      </div>
    </div>
    <div class="line-clamp-2 text-[3vw]">
      {{ songsheetData[0].description }}
    </div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div></div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import axios from "axios";
import { ref } from "vue";

const songsheetData = ref([]);
axios
  .get("https://netease-server-beta.vercel.app/top/playlist/highquality")
  .then((res) => {
    songsheetData.value = res.data.playlists.map((item) => ({
      imgUrl: item.subscribers[0].backgroundUrl,
      title: item.name,
      avatarUrl: item.subscribers[0].avatarUrl,
      author: item.subscribers[0].nickname,
      tag: item.tag,
      description: item.description,
    }));
    console.log(songsheetData.value);
  });
</script>
