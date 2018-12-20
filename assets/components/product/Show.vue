<template>
    <div class="container">
        <h1>{{title}}</h1>
        <h2>{{content}}</h2>
    </div>    
</template>

<script>

export default {
    data: function() {
        return {
            title: "",
            content: ""
        }
    },
    mounted: function() {
        this.getProducts();
    },
    methods: {
        getProducts: function() {
            const path = String(this.$route.path).replace(/products/, '');
            
            const data = this.$store.state.database.ref('products' + path);
            
            data.on("value", (snapshot) => {
                const blog = Object.entries(snapshot.val());
                for(var i = 0; i < blog.length; i++) {
                    if(blog[i][0] === "content") {
                        this.content = blog[i][1]
                    } else if (blog[i][0] === "title") {
                        this.title = blog[i][1];
                    }
                }
                console.log(blog)
            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })
        }
    }
}
</script>