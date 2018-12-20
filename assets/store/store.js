import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as FireBase from 'firebase';

Vue.use(Vuex);

const firebase = FireBase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID
});

const database = firebase.database();

const provider = new FireBase.auth.GithubAuthProvider();

const store = new Vuex.Store({
    state: {
        firebase: firebase,
        database: database,
        id: "",
        name: "",
        session: false,
        provider: provider
    },
    mutations: {
        loginCppPay(state, id, name, session) {
            state.id = String(id);
            state.name = name;
            state.session = session;
        },
        getSession(state, bool) {
            state.session = bool;
        },
        deleteSession(state, bool) {
            state.session = bool;
        }
    },
    plugins: [ createPersistedState({
        key: 'loginSession',
        paths: ['session'],
        storage: window.sessionStorage,
    })]
});

export default store;