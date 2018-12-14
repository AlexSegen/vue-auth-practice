<template>
<div>
    <navbar v-if="AUTHENTICADED"/> 
      <main>
        <router-view/>
      </main>
    <footer/>
</div>      
</template>


<script>
import { mapGetters } from "vuex";
import Navbar from '@/components/partials/Navbar.vue'
import Footer from '@/components/partials/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar, Footer
  },
  computed: {
    ...mapGetters(["AUTHENTICADED"])
  },
  created(){
    this.$store.dispatch("CHECK_AUTH");
  }
}
</script>
<style>
main {
  padding: 20px 0;
}
</style>
