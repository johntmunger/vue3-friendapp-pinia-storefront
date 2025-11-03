import { defineStore } from 'pinia';

export const friendStore = defineStore('friends', {
  state: () => ({
    names: [],
  }),

  actions: {
    makeFriend(name) {
      this.names.push(name);
    },
  },
});
