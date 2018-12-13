<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card card-form">
                <div class="card-body">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </form>
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
            user: {
                name:'Alejandro',
                email: 'ale@mail.com'
            }
        }
    },
    methods:{
        login() {
            Auth.login();
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
