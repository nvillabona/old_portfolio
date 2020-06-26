<template>
  <div class="container">
    <div>
      <b-jumbotron >
        <h1>Nicolás Villabona</h1>
        <hr />
        <br />
        <p>I'm a sofware developer from Cali, Colombia.</p>
        <p>
          Informatics engineering student at Universidad Autónoma de Occidente.
        </p>
        <br />
        <nuxt-link to="/contact" class="btn btn-secondary"
          >Contact me!</nuxt-link
        >
      </b-jumbotron>

      <div>
        <b-jumbotron>
          <h2 class="text-center">My skills</h2>
          <hr>
          <div  class="row">
            <img v-b-tooltip.hover.top title="Vue js" class="skills__images" src="https://img.icons8.com/color/48/000000/vue-js.png" />
            <img v-b-tooltip.hover title="React" class="skills__images" src="https://img.icons8.com/office/48/000000/react.png"/>
            <img v-b-tooltip.hover title="Css" class="skills__images" src="https://img.icons8.com/color/48/000000/css3.png"/>
            <img v-b-tooltip.hover title="Javascript" class="skills__images" src="https://img.icons8.com/color/48/000000/javascript.png"/>
            <img v-b-tooltip.hover title="Html" class="skills__images" src="https://img.icons8.com/color/48/000000/html-5.png"/>
            <img v-b-tooltip.hover title="Git" class="skills__images" src="https://img.icons8.com/color/48/000000/git.png"/>
          
          </div>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.display-3 {
  font-weight: 420;
}

.skills__images {
  margin: auto;
}
</style>
