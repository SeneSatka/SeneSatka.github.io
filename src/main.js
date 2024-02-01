import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18next from "i18next";
import I18NextVue from "i18next-vue";
// i18next.init({
//   lng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
//   fallbackLng: false,
//   resources,
// });

const app = createApp(App);
app.use(router);
// app.use(I18NextVue, { i18next });
app.mount("#app");
