<template>
<div>
    <div class="container">
        <p v-for="(product, key, index) in products" :key=index>
            <router-link :to="{name: 'products', params: {id: product.id}}">{{product.title}}</router-link>
            <router-link :to="{name: 'edits', params: {id: product.id}}" v-if="login && product.uid === uid">Edit</router-link>
            <button v-if="login && product.uid === uid" v-on:click="deleteProduct(product.id)">Delete</button>
        </p>
    </div>
    <div class="container" v-if="login">
        <router-link to="/products/create">Create</router-link>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            products: [],
            uid: this.$store.state.uid,
            login: this.$store.state.session
        }
    },
    mounted: function() {
       this.getBlogs();
    },
    methods: {
        getBlogs: function() {
            console.log(this.$store.state.database);
            const data = this.$store.state.database.ref('products');
            data.on("value", (snapshot) => {
                const products = Object.entries(snapshot.val());

                console.log(products);
                
                this.products.length = 0;
                for(var i = 0; i < products.length; i++) {
                    this.products.push({id: products[i][0], title: products[i][1].title});
                }
            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })         
        },
        deleteProduct: function(id) {
            const data = this.$store.state.database.ref('products/' + String(id));
            data.remove();
        }
    }
}
</script>