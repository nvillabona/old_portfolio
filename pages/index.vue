<template>
  <div class="container">
    <div>
      <b-jumbotron>
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
    </div>

      <SkillsContainer />
  </div>
</template>

<script>

import SkillsContainer from '../components/SkillsContainer';
export default {

  components: {
    SkillsContainer
  }
};
</script>

<style>
.display-3 {
  font-weight: 420;
}
</style>
