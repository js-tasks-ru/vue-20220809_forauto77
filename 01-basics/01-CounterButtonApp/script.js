import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseButton () {
      this.counter++
    }
  }
})

const app = createApp(App)
const vm = app.mount('#app')