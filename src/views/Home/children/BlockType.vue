<template>
  <div>
    <component
      :is="blockTypeComponentMap[props.data.blockCode]"
      :data="propsData"
    ></component>
  </div>
</template>
<script setup>
import { computed } from "vue";
import Menu from "./Menu.vue";
import Banner from "./Banner.vue";
import Palylist from "./Palylist.vue";
import StyleRcmd from "./StyleRcmd.vue";
const blockTypeComponentMap = {
  HOMEPAGE_BANNER: Banner,
  //   HOMEPAGE_BLOCK_HOT_TOPIC: "热门话题 ",
  //   HOMEPAGE_BLOCK_MGC_PLAYLIST: "雷达歌单",
  //   HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: "新歌新碟",
  //   HOMEPAGE_BLOCK_NEW_HOT_COMMENT: "热门评论",
  // HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST: "官方歌单",
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: Menu,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: Palylist,
  HOMEPAGE_BLOCK_STYLE_RCMD: StyleRcmd,
  //   HOMEPAGE_BLOCK_VIDEO_PLAYLIST: "视频播放列表",
  //   HOMEPAGE_BLOCK_YUNCUN_PRODUCED: "云村出品",
  //   HOMEPAGE_MUSIC_CALENDAR: "音乐日历",
  //   HOMEPAGE_MUSIC_MLOG: "音乐日志",
  //   HOMEPAGE_PODCAST24: "24小时播客",
  //   HOMEPAGE_VOICEBOOK_RCMD: "有声书推荐",
  //   HOMEPAGE_VOICELIST_RCMD: "有声书列表推荐",
};
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
// console.log(propsData);

// console.log(props.data);

// const propsData = computed(() => {
//   if (props.data.blockCode == "HOMEPAGE_BLOCK_OLD_DRAGON_BALL") {
//     return props.data.creatives[0].resources.map((item) => ({
//       name: item.uiElement.mainTitle.title,
//       iconUrl: item.uiElement.image.imageUrl,
//     }));
//   }
//   if (props.data.blockCode == "OMEPAGE_BANNER") {
//     return props.data.extInfo.banners.map((item) =>item.pic);
//   }
//   return [];
// });

const propsData = computed(() => {
  switch (props.data.blockCode) {
    case "HOMEPAGE_BLOCK_OLD_DRAGON_BALL":
      return props.data.creatives[0].resources.map((item) => ({
        name: item.uiElement.mainTitle.title,
        iconUrl: item.uiElement.image.imageUrl,
      }));

    case "HOMEPAGE_BANNER":
      return props.data.extInfo.banners.map((item) => item.pic);
    case "HOMEPAGE_BLOCK_PLAYLIST_RCMD":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          playCount: item.resources[0].resourceExtInfo.playCount,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    case "HOMEPAGE_BLOCK_STYLE_RCMD":
      return {
        name: props.data.uiElement.subTitle.title,
        text: props.data.uiElement.button.text,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceExtInfo.song.id,
          song: item.resources[0].resourceExtInfo.song.name,
          artists: item.resources[0].resourceExtInfo.artists[0].name,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
        })),
      };
    default:
      return null;
  }
});
</script>
