import axios from "axios";
// 该函数使用 axios 库向指定 URL 发起 GET 请求，以获取首页数据。
export const getHomePageData = () =>
  axios.get("https://netease-server-beta.vercel.app/homepage/block/page");
export const getHomePageMenu = () =>
  axios.get("https://netease-server-beta.vercel.app/homepage/dragon/ball");
