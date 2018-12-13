import Vue from 'vue'
import Vuex from 'vue'
import store from '@/store'
import router from '@/router'
import Auth from '@/services/auth.service'

export default {
    isLoggedIn(){
        return store.getters.AUTHENTICADED
    },
    login(payload){
        Auth.login(payload).then(res =>{
            if(res.data.auth)
                store.dispatch("LOGIN", true);
                store.commit("SET_USER", res.data.user);
                store.commit("SET_TOKEN", res.data.token);
                router.push('/')
        })
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