<template>
  <h2>Profile</h2>
  <code>
    <pre>{{ authStore.user }}</pre>
  </code>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth"

const authStore = useAuthStore()
</script>

<style></style>
