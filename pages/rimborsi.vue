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
    <section class="sezione-rimborsi is-medium">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Nome">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Cognome">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <!-- <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span> -->
            </p>
          </div>
        </div>
      </div>
      
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="email" placeholder="numero ordine">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Chiedo il rimborso per: </label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="richiesta" value="rossa">
            Allerta Rossa
          </label>
          <label class="radio">
            <input type="radio" name="richiesta" value="arancione">
            Allerta Arancione
          </label>
          <label class="radio">
            <input type="radio" name="richiesta" value="sciopero">
            Sciopero treni (solo carte Treno)
          </label>
          <label class="radio">
            <input type="radio" name="richiesta" value="chiusura">
            Chiusura sentieri (solo carte Trekking)
          </label>
        </div>
        
      </div>

    </section>
  </div>
</template>
