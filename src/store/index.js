import Vue from 'vue'
import Vuex from 'vuex'
import BaseMdoule from './base.module';


Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    BaseMdoule
  }
})
