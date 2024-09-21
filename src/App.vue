<!-- <script setup>
import HomePage from "./views/Home/HomePage.vue";
</script>

<template>
  <HomePage></HomePage>
</template>
//6184
<style scoped></style> -->

<template>
  <!-- <router-view />
  <TabBar class="fixed"></TabBar>
<song-sheet></song-sheet> -->
  <LoginPage></LoginPage>
</template>
<!-- <template>
  <div class="flex flex-col min-h-[100vh]">
    <div class="flex-grow pb-[50px]">
      <router-view />
    </div>
    <TabBar />
  </div>
</template> -->
<script setup>
import TabBar from "./components/TabBar.vue";

import SongSheet from "./views/Home/children/SongSheet.vue";

import LoginPage from "./views/Login/LoginPage.vue";
//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
//
//
</script>
<style scoped></style>
