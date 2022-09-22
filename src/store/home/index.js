import { defineStore } from "pinia"

export const useHomeStore = defineStore('home', {
  state: () => ({
    counter: 0
  }),
  actions: {
    increase() {
      this.counter++
    },
    decrease() {
      this.counter--
    }
  }
})