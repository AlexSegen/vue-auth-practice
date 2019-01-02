<template>
  <div class="about">
    <hero title="Products" subtitle="Available products list"/>
    <section class="section">
      <div class="container">
        <p>
          <button type="button" @click="modal = true, item = { 'photos': []}, adding = true" class="button is-primary" :class="{ 'is-loading': loading }">Add product</button>
        </p>
      </div>
      <div class="container">
      <div class="card-row">
        <div class="card card-member" v-for="(item, index) in products" :key="index">
            <div class="card-image">
                <figure class="image">
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
                <button class="button is-primary" type="button" @click="showInfo(item)">Details</button> <button class="button is-danger is-outlined" :class="{ 'is-loading': loading }" type="button" @click="deleteItem(item)"><i class="fas fa-trash"></i></button>
                <br>
                <time datetime="2016-1-1">Created {{ item.created_at }}</time>
                </div>
            </div>
        </div>
      </div>
      </div>


    <div class="modal" :class="{'is-active': modal}">
      <div class="modal-background"></div>
      <form class="modal-card" @submit.prevent="adding ? addItem() : updateItem()">
        <input type="hidden"  v-model="item.id">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" type="button" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">

          <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text"  v-model="item.name">
          </div>
          </div>

          <div class="field">
          <label class="label">Price</label>
            <div class="control has-icons-left">
              <input class="input" type="text"  v-model="item.price">
              <span class="icon is-small is-left">
                <i class="fas fa-dollar-sign"></i>
              </span>
            </div>
          </div>

          <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" v-model="item.description"></textarea>
          </div>
          </div>

          <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="item.active">
              Active
            </label>
          </div>
          </div>

          <div class="field">
            <label class="label">Photos</label>
            <div class="gallery">
              <p v-if="item.photos.length == 0">No photos</p>
              <figure  v-else class="image is-128x128" v-for="(photo, index) in item.photos" :key="index">
                <a class="delete is-small" @click="removePhoto(index)"></a>
                <img :src="photo">
              </figure>
              
            </div>
          </div>

          <div class="field">
            <label class="label">Add photo</label>
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input select-file" type="file" @change="handleFileUploadChange(this)"  accept="image/*"/>
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    {{photoSelected.name}}
                  </span>
                </label>
                <button class="file-submit button is-success" :class="{'is-loading': uploading }" type="button" @click="handleFileUploadSubmit"><i class="fas fa-upload"></i></button>
              </div>
          </div>


        </section>
        <footer class="modal-card-foot">
          <button type="submit" class="button is-success" :class="{ 'is-loading': loading }">Save changes</button>
          <button class="button" type="button"  @click="closeModal">Close</button>
        </footer>
      </form>
    </div>

    </section>   
  </div>
</template>
<script>
import firebase from 'firebase'
import sysMsg from '@/helpers/sys.messages'
import Hero from '@/components/partials/Hero'
import productServices from '@/services/product.services'
export default {
  name:'about',
  components:{
    Hero
  },
  data(){
    return {
      loading: false,
      adding:false,
      modal: false,
      uploading: false,
      products: [],
      newPhotos: [],
      item: {
        photos: []
      },
      photoSelected:''
    }
  },
  created(){
    this.getItems();
  },
  methods:{
    handleFileUploadChange() {
      this.photoSelected = document.querySelector('.select-file').files[0];
    },
    handleFileUploadSubmit() {
           if (this.photoSelected.toString().trim().length > 0){
            this.uploading = true;    
            let _this = this;
            const uploadTask = firebase.storage().ref().child(`images/${this.photoSelected.name}`).put(this.photoSelected); //create a child directory called images, and place the file inside this directory
            uploadTask.on('state_changed', (snapshot) => {
            }, (error) => {
              _this.uploading = false;
              console.log(error);
            }, () => {
              uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                _this.item.photos.push(downloadURL);
                sysMsg.getMsg('success', 'Photo uploaded!')
                _this.uploading = false;
                _this.photoSelected = ''
              });
            });    
          } else {
            sysMsg.getMsg('error', 'Select a photo')
          }
     },
    getItems(){
      productServices.getAll().then(response => {
          this.products = response.data;
      })
    },
    addItem(){
      this.loading = true
      let now = new Date();
      this.item.created_at = now;
      productServices.postItem(this.item).then(response => {
          sysMsg.getMsg('success', 'Item added!')
          this.products.push(response.data);
          this.loading = false;
          this.closeModal();
      })
    },
    updateItem(){
      this.loading = true
      productServices.updateItem(this.item).then(response => {
          this.loading = false
          sysMsg.getMsg('info', 'Item updated!')
      })
    },
    deleteItem(item){
      this.loading = true
      productServices.deleteItem(item).then(() => {
        this.products.splice(this.products.findIndex(find => find.id == item.id), 1)
        this.loading = false
        sysMsg.getMsg('warning', 'Item removed!')
      })
    },
    removePhoto(index){
      this.item.photos.splice(index, 1)
    },
    closeModal(){
      this.modal = false;
/*       this.item = {
        id: '',
        name: '',
        price: '',
        description: '',
        active: '',
        photos: [],
        picture: '',
        created_at: ''
      }, */
      this.item = {
        photos: []
      }
      this.photoSelected = '';
    },
    showInfo(item){
      this.item = item;
      this.modal = true;
      this.adding = false;

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
    min-height: 455px;
    margin: 5px;
    float:left;
}
.gallery .image {
  margin: 3px;
  display: inline-block;
  position: relative;
}

.gallery .image img{
  max-width: 100%!important;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.gallery{
  padding: 10px;
  border: 1px solid #ddd;
}
.delete{
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 1;
}
</style>
