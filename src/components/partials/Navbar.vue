<template>
    <header>

<!--         <b-navbar type="dark" variant="primary" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
                <b-nav-item :to="{ name: 'home'}">Home</b-nav-item>
                <b-nav-item :to="{ name: 'about'}">About</b-nav-item>
                <b-nav-item-dropdown :text="user.name" right>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0);" @click="logout()">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar> -->

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link :to="{ name: 'home'}" class="navbar-item">
        Home
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{user.name}}
        </a>

        <div class="navbar-dropdown">
          <router-link :to="{ name: 'about'}" class="navbar-item">
            Profile
          </router-link>
          <a class="navbar-item" disabled>
            Configuration
          </a>
          <hr class="navbar-divider">
          <a href="javascript:void(0);" @click="logout()" class="navbar-item">
            Logout
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light"  @click="logout()">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    </header>
</template>
<script>
import Auth from '@/auth'
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

