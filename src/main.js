import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

// import { getDatabase } from "firebase/database";
import { plugin, defaultConfig } from '@formkit/vue'


/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyBpYydFYuwcA04i6uLZ08iUOJDGaewsVII",
    authDomain: "skillz-13598.firebaseapp.com",
    projectId: "skillz-13598",
    storageBucket: "skillz-13598.appspot.com",
    messagingSenderId: "791128990819",
    appId: "1:791128990819:web:2001bc583eaee2c9308456",
    measurementId: "G-9XEZJ7NX45"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig);

app.mount("#app");
