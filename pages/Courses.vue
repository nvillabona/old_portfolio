<template>
<div>
  <div class="d-flex justify-content-center">

  <BounceLoader :loading="loading" :color="'#68d391'" :size="100" />
  </div>
  <PlatziCourses v-if="!loading" :Pcourses="courses"/>
</div>
</template>

<script>
import PlatziCourses from '../components/PlatziCourses.vue';
import { BounceLoader } from '@saeris/vue-spinners';

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
    BounceLoader
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


