import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index'
import store from './store/index'
import {setupComponents} from './store/setup.components';
import {CHECK_AUTHORIZE_STATUS} from '@/store/actions.type';

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  store.dispatch(CHECK_AUTHORIZE_STATUS,true);
  next();
})

setupComponents(Vue);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
