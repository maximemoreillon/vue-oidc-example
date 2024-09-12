import { User } from "oidc-client-ts"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | void | null>()
  const setUser = (newUser: User | void | null) => (user.value = newUser)
  return { user, setUser }
})
