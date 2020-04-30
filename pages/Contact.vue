<template>
  <div class="container">
    <b-jumbotron header="Contact me" lead>
      <hr />
      <div class="row" >
        <div class="buttons">
          <a href="https://www.linkedin.com/in/nvillabona/" target="_blank" class="btn btn-primary"><LinkedInIcon class="button-icon" /> LinkedIn</a>
          <a href="https://github.com/nvillabona" target="_blank" class="btn btn-primary"><GitIcon class="button-icon" style="height: 1.3rem;"/>GitHub</a>
          <a href="https://twitter.com/n_villabona" target="_blank" class=" btn btn-primary"><TwitterLogo class="button-icon" />Twitter</a>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import GitIcon from '../components/icons/Git-icon';
import TwitterLogo from '../components/icons/Twitter-logo.vue';
import LinkedInIcon from '../components/icons/LinkedIn-icon.vue';
export default {
  components:{
    GitIcon,
    TwitterLogo,
    LinkedInIcon
  }
};
</script>

<style>
.button-icon{
  margin-bottom: 1%; 

    width: rem;
    height: 1rem;
}
.buttons {
  text-align: center;
  margin-bottom: 3rem;

  
}

</style>