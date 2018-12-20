<template>
    <div class="container">
        <h1>Title:{{title}}</h1>
        <h2>Price:{{price}}</h2>
        <h2>{{content}}</h2>
        <vue-q-art :config=config></vue-q-art>
    </div>    
</template>

<script>
import VueQArt from 'vue-qart';

export default {
    data: function() {
        return {
            title: "",
            content: "",
            price: "",
            config: {
                value: "",
                imagePath: "../../img/qr.jpg",
                filter: "color",
            }
        }
    },
    components: {
        VueQArt
    },
    mounted: function() {
        this.getProducts();
    },
    methods: {
        getProducts: function() {
            const path = String(this.$route.path).replace(/products/, '');
            
            const data = this.$store.state.database.ref('products' + path);
            
            data.on("value", (snapshot) => {
                const product = Object.entries(snapshot.val());
                for(var i = 0; i < product.length; i++) {
                    if(product[i][0] === "content") {
                        this.content = product[i][1]
                    } else if (product[i][0] === "title") {
                        this.title = product[i][1];
                    } else if (product[i][0] === "price") {
                        this.price = product[i][1];
                        this.config.value = product[i][1];
                    }
                }

                console.log(this.config)
            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })
        }
    }
}
</script>