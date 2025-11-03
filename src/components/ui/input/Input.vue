<script setup>
import { cn } from '@/lib/utils';
import { friendStore } from '@/stores/friends';
import { ref } from 'vue';

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  class: { type: null, required: false },
});

const friends = friendStore();
let newFriend = ref('');

function addFriend() {
  friends.addFriend(newFriend.value);
  newFriend.value = '';
}
</script>

<template>
  <div class="padding-all rounded-md space-y-4">
    <div class="pt-4 flex justify-center items-center">
      <form class="" @submit.prevent="addFriend()">
        <input
          v-model="newFriend"
          placeholder="Who's your new friend?"
          :class="
            cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              props.class
            )
          "
          class="pr-60"
        />
      </form>
    </div>

    <div class="border-b flex justify-center items-center">
      <div class="pl-10 pb-6 w-full self max-w-115">
        <ul class="items-center self">
          <li v-for="(name, i) in friends.names" :key="i">
            {{ name }}<span v-if="i < friends.names.length - 1">, </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
