<template>
<div class="login">

<hero title="Welcome back!" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, esse vero! Sequi deserunt."/>

  <section class="section">
    <div class="container">
    <div class="login-card">
        <div class="card-content">
            <div class="is-centered block has-text-centered flex">
                <i class="fas fa-gem fa-2x"></i>
            </div>
            
            <form @submit.prevent="login">
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="email" placeholder="Enter email" v-model="payload.email" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password"  placeholder="Password" v-model="payload.password" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-primary is-fullwidth" :class="{'is-loading': loading}" >
                    Sign In
                    </button>
                </p>
                </div>
                <div class="form-footer">
                    <p>Don't have an account? <router-link :to="{ name:'register' }">Join now</router-link></p>
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
export default {
    name:'login',
    components:{
        Hero
    },
    data(){
        return {
            loading: false,
            payload: {
                email:'',
                password: ''
            }
        }
    },
    methods:{
        login() {
            this.loading = true;
            Auth.login(this.payload).then(()=>{
                this.loading = false;
            }).catch(error => {
                console.log('error', error);
                this.loading = false;
                this.payload.password = ''
            })
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
