import "./assets/main.css";

import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";

// createApp(App).mount("#app");

const options = {
  // You can set your default options here
};

createApp(App).use(Toast, options).mount("#app");
