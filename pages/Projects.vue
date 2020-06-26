<template>
  <div class="container">
    <b-jumbotron >
      <h1>Some projects i've done</h1>
      <hr />
      <div class="row">

      <!-- personal website card -->
      <b-card
        title="Personal website"
        img-src="https://i.imgur.com/Rx6JWwv.png"
        img-alt="Personal website image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Personal website using Nuxt.js
        </b-card-text>
        <div class="col text-center">
          <nuxt-link to="/" class="btn btn-secondary">Go</nuxt-link>
        </div>
      </b-card>


      <!-- platzi video card -->
            <b-card
        title="Platzi Video"
        img-src="https://i.imgur.com/zGvrCg3.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Prototype done in html and css.
        </b-card-text>
        <div class="col text-center">
          <a href="https://4szni.csb.app/" target="__blank" class="btn btn-secondary">Go</a>
        </div>
      </b-card>
      </div>

    </b-jumbotron>

    <b-card
      title="Checkout my codepens 😊"
      img-src="https://img.icons8.com/ios-filled/500/000000/codepen.png"
      img-alt="Codepen image"
      img-top
      tag="article"
      style="max-width: 18rem;"
      class="mb-2 container"
    >
      <b-card-text> </b-card-text>
      <div class="col text-center">
        <b-button
          href="https://codepen.io/nvillabona"
          target="_blank"
          variant="primary"
          >Go!</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card{
  margin: auto;

}
</style>
