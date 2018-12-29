import store from '@/store'
import router from '@/router'
import Auth from '@/services/auth.service'

export default {
    register(payload){
        return Auth.register(payload).then(res =>{
            router.push('/')
        })
    },
    checkSession(){
        let session  = localStorage.getItem('_SESSION');
        return (session != null) ? JSON.parse(session).auth : false
    },
    isLoggedIn(){
        return store.getters.AUTHENTICADED
    },
    login(payload){
        return Auth.login(payload).then(res =>{
            if(res.data.auth)
                localStorage.setItem('_SESSION', JSON.stringify(res.data));
                store.dispatch("LOGIN", true);
                store.commit("SET_USER", res.data.user);
                store.commit("SET_TOKEN", res.data.token);
                router.push('/')
        })
    },
    logout(){
        store.dispatch("LOGOUT");
    },
    getUser(){
        return store.getters.USER
    }
}