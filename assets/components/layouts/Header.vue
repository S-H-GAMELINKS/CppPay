<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">LunaWithVue</a>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <router-link to="/" class="dropdown-item">Top</router-link>
                    <router-link to="/about" class="dropdown-item">About</router-link>
                    <router-link to="/contact" class="dropdown-item">Contact</router-link>
                    <router-link to="/products" class="dropdown-item">Products</router-link>
                    <router-link to="/" class="dropdown-item" v-if="this.$store.state.session" v-on:click.native="logOut">LogOut</router-link>
                </div>
            </div>
        </nav>
    </div>    
</template>

<script>

import firebase from 'firebase';

export default {
    methods: {
        logOut: function() {
            firebase.auth().signOut();
            this.$store.commit('deleteSession', false);
            console.log(this.$store.state)
        }
    }
}
</script>