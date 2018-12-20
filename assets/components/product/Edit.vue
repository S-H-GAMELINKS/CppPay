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
            <span class="input-group-text">Content</span>
        </div>
        <textarea v-model="content" class="form-control" placeholder="Input product content..."></textarea>
    </div>
    <p>
        <button type="button" class="btn btn-primary" v-on:click="updateProduct">Update</button>
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
    mounted: function() {
        this.getProducts();
    },
    methods: {
        getProducts: function() {
            const path = String(this.$route.path).replace(/products\/edit/, '');
            
            const data = this.$store.state.database.ref('products' + path);
            
            data.on("value", (snapshot) => {
                const blog = Object.entries(snapshot.val());
                this.title = blog[1][1];
                this.content = blog[0][1]
            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })
        },
        updateProduct: function() {
            const path = String(this.$route.path).replace(/blogs\/edit/, '');
            const data = this.$store.state.database.ref('products' + path);
            data.set({
                title: this.title,
                content: this.content,
                price: this.price,
                uid: this.$store.state.id
            });
            this.title = "";
            this.content = "";
            router.push({path: '/products'});
        }
    }
}
</script>