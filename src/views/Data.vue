<template>
  <h2>Protected API call</h2>
  <p>
    <button @click="sendRequest">API Request</button>
  </p>
  <p v-if="data">Data: {{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useAuthStore } from "@/stores/auth"

const { VITE_API_URL } = import.meta.env

const data = ref()
const authStore = useAuthStore()
async function sendRequest() {
  const response = await fetch(VITE_API_URL, {
    headers: {
      authorization: `Bearer ${authStore.user?.access_token}`,
    },
  })
  data.value = await response.text()
}
</script>

<style></style>
