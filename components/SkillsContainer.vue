<template>
  <div>
        <b-jumbotron>
            <h2 class="text-center">My skills</h2>
            <hr />

            <Skills title="Languages" :data="languages" />
              

            <Skills title="Javascript Frameworks" :data="jsFrameworks" />
            <h4> </h4>
            <Skills title="Other Skills and tools" :data="others" />
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from "./Skills";
export default {
  components: {
    Skills,
  },
  data() {
    return {
      languages: [
        {
          title: "Javascript",
          img_link: "https://img.icons8.com/color/48/000000/javascript.png",
        },
        {
          title: "Css",
          img_link: "https://img.icons8.com/color/48/000000/css3.png",
        },
        {
          title: "Html",
          img_link: "https://img.icons8.com/color/48/000000/html-5.png",
        },
      ],

      jsFrameworks: [
        {
          title: "Vue.js",
          img_link: "https://img.icons8.com/color/48/000000/vue-js.png",
        },
        {
          title: "React",
          img_link: "https://img.icons8.com/color/48/000000/react-native.png",
        },
      ],
      others: [
        {
          title: "Git",
          img_link: "https://img.icons8.com/color/48/000000/git.png",
        },
        {
          title: "Bootstrap",
          img_link: "https://img.icons8.com/color/48/000000/bootstrap.png",
        },
        {
          title: "MySql",
          img_link:
            "https://img.icons8.com/ios-filled/48/000000/mysql-logo.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>