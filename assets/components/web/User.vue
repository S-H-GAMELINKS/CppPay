<template>
    <div class="container">
        <h1>{{this.$store.state.name}}</h1>
        <payjp-checkout
            :api-key="api_key"
            :client-id="client_id"
            text="add credit crad"
            submit-text="テストカードで支払い"
            name-placeholder="JOHN DOE"
            v-on:created="onTokenCreated"
            v-on:failed="onTokenFailed">
        </payjp-checkout>
    </div>
</template>

<script>
import PayjpCheckout from 'vue-payjp-checkout';

export default{
    data: function() {
        return {
            api_key: process.env.API,
            client_id: process.env.SECRET,
            token: null
        }
    },
    components: {
        PayjpCheckout
    },
    computed: {
        saveToken: function() {
            this.setCreditToken(this.token);
        }
    },
    methods: {
        onTokenCreated(token) {
            this.token = token.id;
            this.setCreditToken(token.id);
        },
        onTokenFailed(e) {
            console.error(e);
        },
        setCreditToken: function(token) {
            const data = this.$store.state.database.ref('users/' + this.$store.state.id);
            data.set({
                token: token
            });
        }
    }
}
</script>