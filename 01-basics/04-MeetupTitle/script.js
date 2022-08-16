import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const App = defineComponent({
  data () {
    return {
      meetup: null,
      meetupId: null
    }
  },
  computed: {
    meetupDescription () {
      return this.meetup?.title
    }
  },
  watch: {
    meetupId () {
      this.getMeetup(this.meetupId)
    }
  },
  methods: {
    async getMeetup (id) {
      this.meetup = await fetchMeetupById(id)
    }
  }
})

const app = createApp(App)
const vm = app.mount('#app')