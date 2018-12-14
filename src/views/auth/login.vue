<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card card-form">
                <div class="card-body">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="payload.email" required :disabled="loading">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="payload.password" required :disabled="loading">
                    </div>
                    <button type="submit" class="btn btn-primary" v-text="loading ? 'Sending':'Sign In'" :disabled="loading">Sign In</button >
                </form>
                </div>
            </div>
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
.card-form {
    max-width: 350px;
    margin: 0 auto;
}
</style>
