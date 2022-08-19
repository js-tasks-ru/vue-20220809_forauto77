import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      meetup: null,
      meetupError: null
    }
  },

  watch: {
    meetupId () {
      this.getMeetups()
    }
  },

  mounted () {
    this.getMeetups()
  },

  methods: {
    getMeetups () {
      this.meetup = null
      this.meetupError = null
      fetchMeetupById(this.meetupId)
        .then((meetup) => {
          this.meetup = meetup
        })
        .catch((error) => {
          this.meetupError = error.message
        })
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView
        v-if="meetup"
        :meetup="meetup"
      />

      <UiContainer
        v-else-if="!meetupError"
      >
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer
        v-else-if="meetupError"
      >
        <UiAlert>{{ meetupError }}</UiAlert>
      </UiContainer>
    </div>`,
});
