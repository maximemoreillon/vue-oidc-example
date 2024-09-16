import { createApp } from "vue"
import { createPinia } from "pinia"
import { useAuthStore } from "./stores/auth"
import OidcAuth from "@moreillon/oidc-auth"
import App from "./App.vue"
import router from "@/router"

const pinia = createPinia()

const app = createApp(App).use(pinia).use(router)

const authStore = useAuthStore()

const { VITE_APP_OIDC_AUTHORITY, VITE_APP_OIDC_CLIENT_ID } = import.meta.env
const oidcOptions = {
  authority: VITE_APP_OIDC_AUTHORITY,
  client_id: VITE_APP_OIDC_CLIENT_ID,
}

const auth = new OidcAuth(oidcOptions)
auth.init().then((user) => {
  if(!user) return
  authStore.setUser(user)
  app.mount("#app")
})

auth.userManager.events.addUserLoaded((u) => {
  console.log("Refreshed!")
  authStore.setUser(u)
})
