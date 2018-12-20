<template>
<div>
    <h1>Index Pages</h1>

    <button v-if="this.$store.state.session" v-on:click="loginCppPay" class="btn btn-primary">Login to GitHub</button>
</div>    
</template>

<script>
import router from '../../router/router';
export default {
    moutnted: function() {
        this.userLogin();
    },
    methods: {
        userLogin: function() {
            const firebase = this.$store.state.firebase;
            firebase.auth().onAuthStateChanged((response) => {
                if (response) {
                    this.$store.commit('getSession', true);
                    router.push({path: '/'});
                }
            }, (error) => {
                console.log(error);
            });
        },
        loginCppPay: function() {
            const firebase = this.$store.state.firebase;
            const provider = this.$store.state.provider;

            firebase.auth().signInWithPopup(provider).then((response) => {
                this.$store.commit('loginCppPay', response.uid, response.name, true);
            }, (error) => {
                console.log(error)
            })
            this.userLogin();
        }
    }
}
</script>