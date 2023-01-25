<template>
  <div class="container text-center">
    <b-jumbotron header="Contact me" lead>
      <hr />
      <div class="row" >
        <div class="buttons  ">
          <a href="https://www.linkedin.com/in/nvillabona/" target="_blank" class="btn btn-primary"><LinkedInIcon class="button-icon" /> LinkedIn</a>
          <a href="https://github.com/nvillabona" target="_blank" class="btn btn-primary"><GitIcon class="button-icon" style="height: 1.3rem;"/>GitHub</a>
          <a href="https://gitlab.com/nvillabona" target="_blank" class="btn btn-primary"><GitlabIcon class="button-icon" style="height: 1.3rem;"/>GitLab</a>
          <a href="https://twitter.com/n_villabona" target="_blank" class=" btn btn-primary"><TwitterLogo class="button-icon" />Twitter</a>
          <a href="mailto:nvillabona@gmail.com" target="_blank" class=" btn btn-primary"><Email-icon class="button-icon" />Email</a>
          <a href="https://t.me/nvillabona" target="_blank" class=" btn btn-primary"><TelegramIcon class="button-icon" />Telegram</a>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import GitIcon from '../components/icons/Git-Icon.vue';
import TwitterLogo from '../components/icons/Twitter-logo.vue';
import LinkedInIcon from '../components/icons/LinkedIn-icon.vue';
import EmailIcon from '../components/icons/Email-icon.vue';
import TelegramIcon from '../components/icons/Telegram-icon.vue';
import GitlabIcon from '../components/icons/Gitlab-icon.vue';
export default {
  components:{
    GitIcon,
    TwitterLogo,
    LinkedInIcon,
    EmailIcon,
    TelegramIcon,
    GitlabIcon
  }
};
</script>

<style>
.button-icon{
  margin-bottom: 1%; 
  margin-right: 0%;
    width: 2rem;
    height: 1rem;
}
.buttons {
  text-align: center;
  margin: auto;

  
}

</style>