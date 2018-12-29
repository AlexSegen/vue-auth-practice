<template>
<div class="login">

<hero title="Sign up now!" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, esse vero! Sequi deserunt."/>

  <section class="section">
    <div class="container">
    <div class="login-card">
        <div class="card-content">
            <div class="is-centered block has-text-centered flex">
                <i class="fas fa-gem fa-2x"></i>
            </div>
            
            <form @submit.prevent="register">
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Your name" v-model="payload.name" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Enter email" v-model="payload.email" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="password"  placeholder="Password" v-model="payload.password" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right" :class="{'has-text-primary': matchPasswords}">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="password"  placeholder="Confirm password" v-model="paswordConfirm" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right" :class="{'has-text-primary': matchPasswords}">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-primary is-fullwidth" :class="{'is-loading': loading}" >
                    Register
                    </button>
                </p>
                </div>
                
                <div class="form-footer">
                    <p>Already have an account? <router-link :to="{ name:'login' }">Sign in!</router-link></p>
                </div>
            </form>
        </div>
    </div>

    </div>
  </section>


</div>
</template>

<script>
import Auth from '@/auth'
import Hero from '@/components/partials/Hero'
import sysMsg from '@/helpers/sys.messages'
export default {
    name:'login',
    components:{
        Hero
    },
    data(){
        return {
            loading: false,
            paswordConfirm:'',
            payload: {
                name: '',
                email:'',
                password: ''
            }
        }
    },
    computed:{
        matchPasswords(){
            return this.payload.password.toString().trim().length > 0 && this.paswordConfirm.toString().trim().length > 0 && this.payload.password == this. paswordConfirm
        }
    },
    methods:{
        register() {
            if(this.payload.password.toString().trim() == this.paswordConfirm.toString().trim()) {
                this.loading = true;
                Auth.register(this.payload).then(()=>{
                    this.loading = false;
                }).catch(error => {
                    console.log('error', error);
                    this.loading = false;
                })
            } else {
                sysMsg.getMsg('error', 'Las contraseñas no coinciden')
            }
        }
    }
}
</script>

<style>
.login-card {
    max-width: 300px;
    margin: 0 auto;
}
</style>
