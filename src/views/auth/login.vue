<template>
<div class="login">
    <div class="card card-form">
        <div class="card-content">
            <form @submit.prevent="login">
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Enter email" v-model="payload.email" required :disabled="loading">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
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
                    <button class="button is-success" type="submit" v-text="loading ? 'Sending':'Sign In'" :disabled="loading">
                    Sign In
                    </button>
                </p>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Auth from '@/auth'
export default {
    name:'login',
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
.card.card-form {
    max-width: 300px;
    margin: 0 auto;
}
</style>
