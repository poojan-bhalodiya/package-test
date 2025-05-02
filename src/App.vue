<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useLocalStorage, useSessionStorage } from "@imtapan/re-storage";

const local = useLocalStorage("myKey", "defaultValue");
local.set("Hello World");
console.log(local.get()); // 'newValue'

const session = useSessionStorage("sessionKey", { loggedIn: false });
session.set({ loggedIn: true });
console.log(session.get()); // { loggedIn: true }
</script>

<template>
  <p>Hello World</p>
</template>

<style scoped></style>
