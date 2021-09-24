<template>
  <div class="container column is-10">
    <section class="section">
      <h2 class="title is-3 has-text-grey">
        "Richiedi il rimborso  <b-icon
          icon="rocket"
          size="is-large"
        />"
      </h2>
      <h3 class="subtitle is-6 has-text-grey">
        Author: <a href="https://github.com/danimog">
          Daniele Moggia
        </a>
      </h3>
    </section>

    <section class="sezione-rimborsi">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Nome</label>
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Nome" v-model="nome">
              <b-icon
                icon="apps"
              />&nbsp; 
            </p>
          </div>
          <div class="field">
            <label class="label">Cognome</label>
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Cognome" v-model="cognome">
              <span class="icon is-small is-left">
                <b-icon
                icon="apps"
              />&nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Numero ordine</label>
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="numero ordine" v-model="n_ordine">
              <span class="icon is-small is-left">
                <b-icon
                icon="filter"
              />&nbsp;
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Indirizzo E-mail</label>
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" v-model="email">
              <span class="icon is-small is-left">
                <b-icon
                icon="mail"
              />&nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Chiedo il rimborso per: </label>

        <div class="block">
          <b-field>
            <b-radio v-model="radio"
                name="richiesta"
                native-value="Allerta Rossa">
                Allerta Rossa
            </b-radio>
          </b-field>
          <b-field>
            <b-radio v-model="radio"
                name="richiesta"
                native-value="Allerta Arancione">
                Allerta Arancione
            </b-radio>
          </b-field>
          <b-field>
            <b-radio v-model="radio"
                name="richiesta"
                native-value="Chiusura sentieri">
                Chiusura sentieri (SOLO per carta Trekking)
            </b-radio>
          </b-field>
          <b-field>
            <b-radio v-model="radio"
                name="richiesta"
                native-value="Sciopero treni">
                Sciopero dei treni (SOLO per carta Multiservizi Treno)
            </b-radio>
          </b-field>
        </div>
        <p class="content">
            <b>Selezione:</b>
            {{ radio }}
        </p>
      </div>
<hr>
        <div class="field is-grouped my-bottoni-centrali">
          <div class="control has-text-centered">
            <input class="button is-primary" type="submit" value="Invia" @click="writeToFirestore" :disabled="writeSuccessful">
          </div>
          <div class="control has-text-centered">
            <input class="button is-danger" type="reset" value="Cancella">
          </div>
      </div>

      <div v-if="error">
        <span class="has-text-danger">{{messaggioErrore}}</span>
      </div>
      <div v-if="writeSuccessful">
        <span>Grazie per aver compilato la richiesta.</span>
      </div>

    </section>
  </div>
</template>

<script>
  import {fireDb} from '~/plugins/firebase.js'
  export default {
    data() {
      return {
        writeSuccessful: false,
        error: false,
        messaggioErrore: '',
        radio: '',
        nome: '',
            cognome: '',
            email: '',
            n_ordine: ''
      }
    },
    methods: {
      async writeToFirestore() {
        
        if ((this.nome && this.cognome && this.n_ordine && this.email && this.motivo_rimborso) != '') {
          this.error = false;
          this.messaggioErrore = '';
          let insertok = await fireDb.collection("richieste").add({
              motivo_rimborso: this.radio,
              nome: this.nome,
              cognome: this.cognome,
              email: this.email,
              n_ordine: this.n_ordine
          });

          if (insertok){
            alert("Segnalazione inserita con successo!");
            this.writeSuccessful = true;
          }
        }
        else{
          this.error = true;
          this.messaggioErrore = 'Compila tutti i campi!';
        }
        // try {
        //   await ref.set(document)
        // } catch (e) {
        //   console.error(e)
        // }
        
      }
    }
  }
</script>
