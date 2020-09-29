<template>
  <div class="container">
    <b-jumbotron>
      <h1>Some projects i've done</h1>
      <hr />
      <div class="row">
        <!-- project card -->
        <b-card
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :img-src="project.image"
          :img-alt="project.alt"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            {{ project.description }}
          </b-card-text>
          <div class="col text-center">
            <a :href="project.link" target="_blank" class="btn btn-secondary"
              >Go</a
            >
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
      style="max-width: 18rem"
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
export default {
  data: function () {
    return {
      projects: {
        1: {
          title: "Personal website",
          description: "Website using Nuxt.js",
          image: "https://i.imgur.com/Rx6JWwv.png",
          link: "https://nvillabona.netlify.app/",
          alt: "Personal website preview",
        },
        2: {
          title: "Platzi video",
          description: "Prototype with html & css",
          image: "https://i.imgur.com/zGvrCg3.png",
          link: "https://4szni.csb.app/",
          alt: "Platzi video preview",
        },
        3: {
          title: "Quiz App",
          description: "A quiz app built in VueJs",
          image: "https://i.imgur.com/D5ntdG6.png",
          link: "https://quiz-app-nvillabona.netlify.app/",
          alt: "Quiz App preview",
        },
        4: {
          title: "Social media dashboard",
          description: "A dashboard with dark mode toggle",
          image: "https://i.imgur.com/x14jrEu.png",
          link: "https://social-dashboard-nvillabona.netlify.app/",
        },
        5: {
          title: "Crypto Currency info",
          description: "An app for getting cripto-currencies info",
          image: "https://i.imgur.com/rnkTLXR.png",
          link: "https://inspiring-goodall-1e0f94.netlify.app",
        },

        // 3: {
        //   title: "",
        //   description: "",
        //   image: "",
        //   link: "",
        // },
      },
    };
  },
};
</script>

<style>
.card {
  margin: auto;
}
.card-img {
  border-bottom: 10px blue;
}
</style>
