<template>
  <div class="about">
    <hero title="Profile" :subtitle="'Welcome, '+ user.name"/>
    <section class="section">
      <div class="container">
        <h1 class="title">Profile</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>   
  </div>
</template>
<script>
import Auth from '@/auth'
import Hero from '@/components/partials/Hero'
export default {
  name:'about',
  components:{
    Hero
  },
  computed:{
   user(){
     return Auth.getUser();
    }
},
}
</script>

