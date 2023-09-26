import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).mount("#app");
