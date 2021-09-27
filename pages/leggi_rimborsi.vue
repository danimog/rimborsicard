<template>
    <div class="container mt-5">
        <h2 class="title is-3 has-text-grey">
            "Leggi i rimborsi inviati  <b-icon
            icon="glasses"
            size="is-large"
            />"
        </h2>
        <b-table 
            :data="richieste" 
            :columns="columns" 
            :debounce-search="1000"
            :paginated="true"
            :per-page="25"
        ></b-table>
       
    </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'

    export default {
        data() {
            return {
                richieste: [],
                nome: '',
                cognome: '',
                email: '',
                n_ordine: '',
                columns: [
                    {
                        field: 'cognome',
                        label: 'Cognome',
                        width: '40',
                        searchable: true,
                        sortable: true,
                    },
                    {
                        field: 'nome',
                        label: 'Nome',
                        width: '40',
                        searchable: true,
                    },
                    {
                        field: 'email',
                        label: 'E-mail',
                        width: '40',
                        searchable: true,
                    },
                    {
                        field: 'n_ordine',
                        label: 'Numero Ordine',
                        width: '30',
                        numeric: true,
                        searchable: true,
                        sortable: true,
                    },
                    {
                        field: 'motivo_rimborso',
                        label: 'Motivo del rimborso',
                        width: '60',
                    },
                ]
            }
        },

        mounted(){
          fireDb.collection("richieste").orderBy('cognome', 'asc').get().then((querySnapshot) => {
              this.richieste = querySnapshot.docs.map(doc =>
                  Object.assign({ id: doc.id }, doc.data())
              )
          })
        },
        firestore:{
            richieste : fireDb.collection("segnalazioni")
        }

    }

</script>

<style lang="scss" scoped>

</style>