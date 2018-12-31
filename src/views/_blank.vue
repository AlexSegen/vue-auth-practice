<template>
  <div class="about">
    <hero title="Blank" subtitle="Plank page"/>
    <section class="section">
      <div class="container">
        <h1 class="title">Title</h1>
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
  name:'about',
  components:{
    Hero
  }
}
</script>

