
<template>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <FormKit
        type="text"
        name="name"
        label="Your name"
        placeholder="John Smith"
        v-model="name"
        help="What do people call you?"
        validation="required"
      />
      <FormKit
        type="text"
        name="email"
        label="Your email"
        placeholder="john.smith@education.wa.edu.au"
        help="What email should we use?"
        v-model="email"
        validation="required|email"
        :validation-messages="{
          matches: 'Thats Not a Student or Teacher Email',
        }"
      />
      <div class="double">
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|length:6|matches:/[^a-zA-Z]/"
          v-model="password"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }"
          validation-visibility="blur"
          placeholder="Your password"
          help="Choose an account password"
        />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm password"
          placeholder="Confirm password"
          validation="required|confirm"
          help="Choose an account password"
        />
      </div>
      <p><button @click="register">Submit</button></p>
    </div>
    <div class="col"></div>
  </div>
</template>

<style>
@import "@formkit/themes/genesis";
</style>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useRouter } from 'vue-router' // import router
import { doc, setDoc } from "firebase/firestore"
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
// const db = firebase.firestore();

const register = () => {
  firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
    
// Add a new document in collection "users"
setDoc(doc(db, "users"), {
  name: "",
  email: ""
});
  }

</script>
