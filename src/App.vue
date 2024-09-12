<template>
  <header>
    <h1>OIDC + Vue</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="/data">Data</RouterLink>
    </nav>
  </header>
  <main v-if="authStore.user">
    <RouterView />
  </main>
  <div v-else>Waiting for auth...</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "./stores/auth"
const authStore = useAuthStore()
</script>

<style>
body {
  margin: 0;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: 1px solid #dddddd;
}

header h1 {
  margin: 0;
  font-size: large;
}

nav {
  display: flex;
  gap: 1em;
}
</style>
