<script setup>
import { cn } from '@/lib/utils';

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  class: { type: null, required: false },
});
</script>

<template>
  <div class="h-16 bg-muted/40">
    <div class="pt-4 flex justify-center items-center">
      <input
        placeholder="Friend names..."
        :class="
          cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            props.class
          )
        "
        class="w-full max-w-96 self"
      />
    </div>
    <ul class="pt-4 flex justify-center items-center">
      <li>Name:</li>
    </ul>
  </div>
</template>
