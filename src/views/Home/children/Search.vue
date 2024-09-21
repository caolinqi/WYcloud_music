<template>
  <div class="flex justify-around p-[4vw] items-center">
    <Icon icon="gg:menu-left" />
    <Icon icon="material-symbols-light:search" class="absolute left-[70px]" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="absolute left-[90px]"
    >
      <path
        fill="#eb4e3c"
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
      />
    </svg>
    <input
      type="text"
      placeholder="离别开出花-就是南方···"
      class="border-[1px] border-black w-[72vw] h-[9vw] rounded-[20px] bg-gradient-to-r from-[#d4d5f6] to-[#ebd5e9] text-center"
    />
    <Icon icon="icon-park-outline:scan-code" class="absolute right-[70px]" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 50 50"
    >
      <g
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          stroke="black"
          d="M29.167 25a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"
        />
        <path
          stroke="black"
          d="M39.583 14.583a6.04 6.04 0 0 0-6.25-6.25v12.5"
        />
        <path
          stroke="black"
          d="M26.354 33.333a8.33 8.33 0 0 1-7.291 1.896a9.02 9.02 0 0 1-6.563-8.458V14.938a8.604 8.604 0 0 1 6.604-8.521A8.33 8.33 0 0 1 25 7.375m4.167 36.375H12.5m8.333-8.333v8.333z"
        />
      </g>
    </svg>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
