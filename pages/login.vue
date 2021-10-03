<template>
    <div class="container">
        <h3 class="has-text-centered mt-5 mb-5">Accedi al tuo account</h3>

        
        <form @submit.prevent="pressed">
            <div class="field is-horizontal">
                <div class="field-body">
                    <div class="field">
                        <label class="label">Email</label>
                        <p class="control is-expanded has-icons-left">
                        <input class="input" type="email" placeholder="email" v-model="email" required >
                        <b-icon
                            icon="email"
                        />&nbsp; 
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <p class="control is-expanded has-icons-left">
                        <input class="input" type="password" placeholder="password" v-model="password" required>
                        <b-icon
                            icon="lock-outline"
                        />&nbsp; 
                        </p>
                    </div>
                </div>
            </div>

            <div class="control has-text-centered">
                <input class="button is-primary" type="submit" value="Login">
            </div>

        </form>
        <div class="error text-danger text-center" v-if="error">{{error.message}}</div>


    </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

    export default {
        data(){
            return{
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            pressed(){
               
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        this.$router.push({ path: '/leggi_rimborsi' })
                    })
                    .catch(error => {
                        this.error = error
                    })
                
            },
            
        },
        
    }
</script>

<style scoped>
.my-container{
    max-width: 80%;
    margin: 2rem auto;
}
.my-form{
    margin: 10px auto;
    max-width: 480px;
    text-align: center;
}
</style>