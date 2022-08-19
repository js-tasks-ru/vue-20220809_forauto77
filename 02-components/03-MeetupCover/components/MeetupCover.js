import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      required: true
    },
    image: {
    }
  },

  computed: {
    imageBackground () {
      return this.image ? `--bg-url: url(${this.image})` : ''
    }
  },

  template: `
    <div class="meetup-cover" :style="imageBackground">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
