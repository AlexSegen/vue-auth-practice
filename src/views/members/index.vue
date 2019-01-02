<template>
  <div class="about">

    <hero title="Members" subtitle="List with all app members"/>
    <section class="section">
      <div class="container">
        <h1 class="title">Title</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
      <div class="card-row">
                        
        <div class="card card-member" v-for="(member, index) in members" :key="index">
            <div class="card-image">
                <figure class="image is-4by3">
                <img :src="member.picture.large" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image">
                        <i class="fas" :class="member.gender == 'female' ? 'fa-female':'fa-male'"></i>
                    <!-- <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"> -->
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">{{ `${member.name.first} ${member.name.last}` }}</p>
                    <p class="subtitle is-6">{{ member.email }}</p>
                </div>
                </div>

                <div class="content">
                {{ member.location.state }} <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>

      </div>
    </section>   

  </div>
</template>
<script>
import memberServices from '@/services/member.services'
import Hero from '@/components/partials/Hero'
export default {
  name:'about',
  components:{
    Hero
  },
  data(){
      return {
          members:[]
      }
  },
  created(){
      //this.getMembers()
  },
  methods: {
      getMembers(){
          memberServices.getAll().then(data => {
              this.members = data.data.results;

              console.log(this.members)
          })
      }
  }
}
</script>

<style scoped>
.card-row {
    margin-top: 50px;
}
.card.card-member {
    max-width: 250px!important;
    min-height: 436px;
    margin: 5px;
    float:left;
}
</style>
