import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import "@fortawesome/fontawesome-free/css/all.css";
import 'material-icons/iconfont/material-icons.css';
import router from './router/index.js';

createApp(App).use(createVuestic()).use(router).mount("#app");

