import { createStore } from 'vuex'

import journal from '../components/daybook/store/journal/';

const store = createStore({
  modules: {
    journal
  }
})

export default store;