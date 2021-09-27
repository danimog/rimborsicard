<template>
  <section class="section">
    <div>
      <h1 class="title is-1 mb-5">Benvenuto!</h1>
    </div>
    <div class="columns is-mobile">
        <card
          title="Chiedi il rimborso"
          icon="pencil"
        >
      <NuxtLink to="rimborsi">Modulo per la richiesta rimborso delle Cinque Terre Card</NuxtLink>

        </card>
      <card
        title="Leggi i rimborsi"
        icon="glasses"
      >
      <NuxtLink to="leggi_rimborsi">Le richieste di rimborso compilate dagli utenti</NuxtLink>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
