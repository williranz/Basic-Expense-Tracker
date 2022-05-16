import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as ExpenseTablePlugin from "vue-good-table-next";
import "vue-good-table-next/dist/vue-good-table-next.css";

createApp(App)
  .use(store)
  .use(router)
  .use(ExpenseTablePlugin.default)
  .mount("#app");
