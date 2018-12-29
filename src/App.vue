<template>
<div>
    <navbar /> 
      <main>
        <router-view/>
      </main>
    <footer/>
</div>      
</template>


<script>
import Navbar from '@/components/partials/Navbar.vue'
import Footer from '@/components/partials/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar, Footer
  },
  created(){
    this.$store.dispatch("CHECK_AUTH");
  }
}
</script>
