<script setup lang="ts">
import { useAuth } from "@moreillon/vue-oidc";
import { watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";

const { user, ready, access_token } = useAuth();

// Example showing how axios auth header can be updated when the token is refreshed
function setAxiosAuthHeader(accessToken: string) {
  axios.interceptors.request.clear();
  axios.interceptors.request.use(
    (config: any) => {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      return config;
    },
    (error: any) => Promise.reject(error)
  );
}
watch(access_token, () => {
  if (access_token.value) setAxiosAuthHeader(access_token.value);
});
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/user">User</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView v-if="ready && user" />
    <div v-else>Authenticating...</div>
  </main>
</template>

<style>
nav {
  display: flex;
  gap: 1em;
}
</style>
