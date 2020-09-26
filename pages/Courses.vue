<template>
  <PlatziCourses :Pcourses="courses"/>
</template>

<script>
import PlatziCourses from '../components/PlatziCourses.vue';


export default {
  data() {
    return {
      courses: [],
      baseUrl: "https://platzi.com",
    };
  },
  components:{
    PlatziCourses
  },
  created() {
    // fetch courses from platzi's api

    fetch(
      "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@nicolas-villabona"
    )
      .then((response) => response.json())
      .then((data) => (this.courses = data.userData.courses));
  },
};
</script>

<style >

</style>>


