import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import "@fortawesome/fontawesome-free/css/all.css"


createApp(App).use(createVuestic()).mount("#app");

