<template>
  <div class="about">
    <hero title="Products" subtitle="Available products list"/>
    <section class="section">
      <div class="container">
        <h1 class="title">Title</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
      <div class="container">
      <div class="card-row">
        <div class="card card-member" v-for="(item, index) in products" :key="index">
            <div class="card-image">
                <figure class="image is-4by3">
                <img :src="item.photos.length > 0 ? item.photos[0]: null" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image">
                        <i class="fas fa-circle" :class="item.active ? 'has-text-success':'has-text-danger'"></i>
                    <!-- <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"> -->
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-6">{{ item.name }}</p>
                    <p class="subtitle is-6">$ {{ item.price }}</p>
                </div>
                </div>

                <div class="content">
                <button class="button is-primary" type="button" @click="showInfo(item)">Details</button>
                <br>
                <time datetime="2016-1-1">Created {{ item.created_at }}</time>
                </div>
            </div>
        </div>
      </div>
      </div>


    <div class="modal" :class="{'is-active': modal}">
      <div class="modal-background"></div>
      <form class="modal-card">
        <input type="hidden"  v-model="selected.id">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" type="button" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">

          <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text"  v-model="selected.name">
          </div>
          </div>

          <div class="field">
          <label class="label">Price</label>
            <div class="control has-icons-left">
              <input class="input" type="text"  v-model="selected.price">
              <span class="icon is-small is-left">
                <i class="fas fa-dollar-sign"></i>
              </span>
            </div>
          </div>

          <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" v-model="selected.description"></textarea>
          </div>
          </div>

          <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="selected.active">
              Active
            </label>
          </div>
          </div>

          <div class="field">
            <label class="label">Photos</label>
            <div class="gallery">
              <figure class="image is-128x128" v-for="(photo, index) in selected.photos" :key="index">
                <a class="delete is-small"></a>
                <img :src="photo">
              </figure>
            </div>
          </div>

          <div class="field">
            <label class="label">Add photo</label>
            <input class="input" type="file" >
          </div>

        </section>
        <footer class="modal-card-foot">
          <button type="submit" class="button is-success">Save changes</button>
          <button class="button" type="button"  @click="closeModal">Cancel</button>
        </footer>
      </form>
    </div>

    </section>   
  </div>
</template>
<script>
import Hero from '@/components/partials/Hero'
import productServices from '@/services/product.services'
export default {
  name:'about',
  components:{
    Hero
  },
  data(){
    return {
      modal: false,
      products: [],
      selected: {
        photos: []
      }
    }
  },
  created(){
    this.getItems();
  },
  methods:{
    getItems(){
      productServices.getAll().then(response => {
          this.products = response.data;
          console.log(this.products)
      })
    },
    closeModal(){
      this.modal = false;
/*       this.selected = {
        id: '',
        name: '',
        price: '',
        description: '',
        active: '',
        photos: [],
        picture: '',
        created_at: ''
      }, */
      this.selected = {
        photos: []
      }
    },
    showInfo(item){
      this.selected = item;
      this.modal = true;

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
    min-height: 395px;
    margin: 5px;
    float:left;
}
.gallery .image {
  margin: 3px;
  display: inline-block;
  position: relative;
}
.delete{
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 1;
}
</style>
