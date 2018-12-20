<template>
<div class="container">
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Title</span>
        </div>
        <input type="text" class="form-control" v-model="title" placeholder="Input product title..."> 
    </div>
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Price</span>
        </div>
        <input type="text" class="form-control" v-model="price" placeholder="Input product price..."> 
    </div>
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Content</span>
        </div>
        <textarea v-model="content" class="form-control" placeholder="Input product content..."></textarea>
    </div>
    <p>
        <button type="button" class="btn btn-primary" v-on:click="createProduct">Create</button>
    </p>
</div>    
</template>

<script>
import router from '../../router/router';

export default {
    data: function() {
        return {
            title: "",
            content: "",
            price: ""
        }
    },
    methods: {
        createProduct: function() {
            this.$store.state.database.ref('products').push({
                title: this.title,
                content: this.content,
                price: this.price,
                uid: this.$store.state.id
            });
            console.log(this.$store.state.id)
            this.title = "";
            this.content = "";
            router.push({path: '/products'});
        }
    }
}
</script>
