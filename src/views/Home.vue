<template>
  <div class="home">
    <hero title="Home" subtitle="home section"/>
    <section class="section">
      <div class="container">
        <h1 class="title">home</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>  
  </div>
</template>
<script>
import Hero from '@/components/partials/Hero'
export default {
  name:'home',
  components:{
    Hero
  }
}
</script>
