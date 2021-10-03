<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/logo_parco_512.jpg"
            alt="Buefy"
            height="105"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Menu
        </p>
        <div>  
            <b-button @click="logout" type="is-danger is-light" class="buttons mt-5 mb-5" v-if="authenticatedUser" size="is-small" icon-left="logout">
                Logout
            </b-button>
        </div>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'

export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inserisci',
          icon: 'pencil',
          to: { name: 'rimborsi' }
        },
        {
          title: 'Leggi',
          icon: 'glasses',
          to: { name: 'leggi_rimborsi' }
        }
      ],
      authenticatedUser:'',
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  },

  methods:{
    logout(){
        firebase.auth().signOut().then(() => {
            this.$router.push('/')
        })
    },
  },


}
</script>

<style lang="scss">
// import my-style 
@import "~assets/scss/my-style.scss";
</style>
