<script setup lang="ts">
import { useAuth } from "@moreillon/vue-oidc";

const { user } = useAuth();
</script>

<template>
  <h1>User</h1>
  <p>
    {{ user || "no user" }}
  </p>
</template>
