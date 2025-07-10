import { createApp } from "vue";
import { auth } from "@moreillon/vue-oidc";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const { VITE_OIDC_AUTHORITY, VITE_OIDC_CLIENT_ID } = import.meta.env;

app.use(auth, {
  authority: VITE_OIDC_AUTHORITY,
  client_id: VITE_OIDC_CLIENT_ID,
});

app.use(router);

app.mount("#app");
