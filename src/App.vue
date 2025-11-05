<script setup>
import MyFriends from './components/MyFriends.vue';
import { friendStore } from './stores/friends';

const friends = friendStore();
</script>

<template>
  <main>
    <nav class="border">
      <p class="text-right p-4">
        You have
        <span v-if="friends.names.length === 0">no friends</span>
        <span v-else-if="friends.names.length === 1">{{ friends.names.length }} friend!</span>
        <span v-else> {{ friends.names.length }} friends!</span>
      </p>
    </nav>
    <MyFriends />
  </main>
</template>

<style>
main {
  color: #ccc;
  font-size: 0.875rem;
}
</style>
