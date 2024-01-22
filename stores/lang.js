import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLangStore = defineStore("lang", {
  state: () => ({
    currentLanguage: ref<'en' | 'pt'>('pt'),
  }),

  actions: {
    toggleLanguage() {
      this.currentLanguage.value = this.currentLanguage.value === 'en' ? 'pt' : 'en';
    },
  },
});
