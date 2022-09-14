<template>
  <div class="toasts">
    <div
      class="toast__item"
      v-for="toast of toasts"
      :key="toast.id"
    >
      <ui-toast
        :toast="toast"
        @remove="remove"
      />
    </div>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data () {
    return {
      toasts: [],
      id: 0
    }
  },
  methods: {
    success (message) {
      this.toasts.push({
        type: 'success',
        message,
        id: this.id
      })
      this.id++
    },
    error (message) {
      console.log(message)
      this.toasts.push({
        type: 'error',
        message,
        id: this.id
      })
      this.id++
    },
    remove (id) {
      const index = this.toasts.findIndex(item => item.id === id)
      this.toasts.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast__item {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast__item + .toast__item {
  margin-top: 20px;
}
</style>
