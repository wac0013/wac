import Vue from 'vue'
import principal from './telas/principal'
import router from './rotas'

Vue.component('principal', principal);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: principal
})
