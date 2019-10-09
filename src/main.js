import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index'
import store from './store/index'
import {setupComponents} from './store/setup.components';

Vue.config.productionTip = false

setupComponents(Vue);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
