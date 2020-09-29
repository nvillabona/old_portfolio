<template>
<div>

  <PlatziCourses v-if="!loading" :Pcourses="courses" :loading="loading"/>
</div>
</template>

<script>
import PlatziCourses from '../components/PlatziCourses.vue';


export default {
  data() {
    return {
      courses: [],
      baseUrl: "https://platzi.com",
      loading: false
    };
  },
  components:{
    PlatziCourses,

  },
  created() {
    // fetch courses from platzi's api
    this.loading = true
    fetch(
      "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@nicolas-villabona"
    )
      .then((response) => response.json())
      .then((data) => (this.courses = data.userData.courses))
      .finally(()=> this.loading = false);
  },
};
</script>

<style >

</style>>


