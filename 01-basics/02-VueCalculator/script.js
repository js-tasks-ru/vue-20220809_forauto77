import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
  data () {
    return {
      operand1: 0,
      operand2: 0,
      operator: null
    }
  },
  computed: {
    result () {
      switch (this.operator) {
        case 'sum':
          return this.operand1 + this.operand2
        case 'subtract':
          return this.operand1 - this.operand2
        case 'multiply':
          return this.operand1 * this.operand2
        case 'divide':
          return this.operand1 / this.operand2
        default:
          return 0
      }
    }
  }
})

const app = createApp(App)
const vm = app.mount('#app')
