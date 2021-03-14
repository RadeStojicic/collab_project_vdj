import Vue from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero/Hero.vue'
import VueStarRating from 'vue-star-rating'

Vue.config.productionTip = false
Vue.use( VueSplide )
Vue.component('app-navbar', Navbar)
Vue.component('app-hero', Hero)
Vue.component('star-rating', VueStarRating.default)

new Vue({
  render: h => h(App),
}).$mount('#app')
