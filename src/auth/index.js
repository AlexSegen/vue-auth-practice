import Vue from 'vue'
import Vuex from 'vue'
import store from '@/store'
import router from '@/router'

export default {
    isLoggedIn(){
        return store.getters.AUTHENTICADED
    },
    login(payload){
        store.dispatch("LOGIN", true);
        store.commit("SET_USER", payload);
        store.commit("SET_TOKEN", '--KX1K4-IXJ$#J23!%K#');
        router.push('/')
    },
    logout(){
        store.dispatch("LOGIN", false);
        store.commit("SET_USER", {});
        store.commit("SET_TOKEN", '');
        router.push('/login')
    },
    getUser(){
        return store.getters.USER
    }
}