import {
    CHECK_AUTHORIZE_STATUS,
    CHANGE_BLANK_STATUS
    } from './actions.type';
import {
    SET_AUTHORIZE_STATUS,
    SET_BLANK_STATUS
} from './mutations.type';

const state = {
    isAuthenticated : true,
    isBlankTemplate : false
}

const getters = {
    isAuthenticated : state => {
        return state.isAuthenticated;
    },
    isBlankTemplate : state => {
        return state.isBlankTemplate;
    }
}
const actions = {
    [CHECK_AUTHORIZE_STATUS](context,data){
        context.commit(SET_AUTHORIZE_STATUS,data);
    },
    [CHANGE_BLANK_STATUS](context,data){
        context.commit(SET_BLANK_STATUS,data);
    },    
}

const mutations = {
    [SET_AUTHORIZE_STATUS](state,payload){
        state.isAuthenticated = payload;
        window.console.log(state.isAuthenticated+' '+payload)
    },
    [SET_BLANK_STATUS](state,payload){
        state.isBlankTemplate = payload;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}