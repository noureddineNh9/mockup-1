import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "./styles/main.scss";

createApp(App).use(router).mount("#app");
