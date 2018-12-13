<template>
    <header>

        <b-navbar type="dark" variant="primary" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
                <b-nav-item :to="{ name: 'home'}">Home</b-nav-item>
                <b-nav-item :to="{ name: 'about'}">About</b-nav-item>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown :text="user.name" right>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0);" @click="logout()">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </header>
</template>
<script>
import Auth from '@/auth'
import { mapGetters } from "vuex";
export default {
    name:'navbar',
    data(){
        return {

        }
    },
    computed:{
        user(){
            return Auth.getUser();
        }
    },
    methods: {
        logout(){
            Auth.logout();
        }
    }
}
</script>

