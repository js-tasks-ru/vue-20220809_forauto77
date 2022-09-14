<template>
  <div class="toast"
    :class="{
      'toast_success': toast.type === 'success',
      'toast_error': toast.type === 'error'
    }">
    <ui-icon
      class="toast__icon"
      :icon="icon"
    />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  props: {
    toast: {
      type: Object
    }
  },
  computed: {
    icon () {
      return this.toast.type === 'success' ? 'check-circle' : 'alert-circle'
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(this.toast.id)
      this.$emit('remove', this.toast.id)
    }, 5000)
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

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
