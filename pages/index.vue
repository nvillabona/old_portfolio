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

      <div>
        <b-jumbotron>
          <h2 class="text-center">My skills</h2>
          <hr />
          <div class="row text-center justify-content-md-center">
            <b-col
              cols="3"
              sm="1"
              v-for="(skill, index) in skills"
              :key="index"
              
            >
              <img
                v-b-tooltip.hover.top
                :title="skill.title"
                
                :src="skill.img_link"
              />
            </b-col>
          </div>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      skills: [
        {
          title: "Vue.js",
          img_link: "https://img.icons8.com/color/48/000000/vue-js.png"
        },
        {
          title: "React",
          img_link: "https://img.icons8.com/office/48/000000/react.png"
        },
        {
          title: "Css",
          img_link: "https://img.icons8.com/color/48/000000/css3.png"
        },
        {
          title: "Javascript",
          img_link: "https://img.icons8.com/color/48/000000/javascript.png"
        },
        {
          title: "Html",
          img_link: "https://img.icons8.com/color/48/000000/html-5.png"
        },
        {
          title: "Git",
          img_link: "https://img.icons8.com/color/48/000000/git.png"
        },
        {
          title: "Bootstrap",
          img_link: "https://img.icons8.com/color/48/000000/bootstrap.png"
        }
      ]
    };
  }
};
</script>

<style>
.display-3 {
  font-weight: 420;
}

</style>
