<template>
  <div class="container">
    <b-jumbotron>
      <h1>Courses i've completed on Platzi: {{ Pcourses.length }}</h1>
      <hr />
      <b-row>
        <b-col col md="2" sm="auto" class="d-flex align-items-center" >
          <label>Filter courses:</label>
        </b-col>
        <b-col col md="10" sm="auto">
        <b-form-input
          v-model="filter"
          placeholder=""
          class="mb-3 mt-3"
        >
        </b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="course in filterCourses" :key="course.id">
          <a
            :href="`https://platzi.com${course.diploma_link}`"
            target="__blank"
            class="my-card text-reset text-decoration-none"
          >
            <img class="my-card-image" :src="course.badge" />

            <p class="my-card-text">{{ course.title }}</p>
          </a>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "PlatziCourses",
  props: {
    Pcourses: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filter: "",
    };
  },

  computed: {
    filterCourses() {
      return this.Pcourses.filter((course) =>
        course.title.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },
};
</script>

<style>
.my-card {
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  height: 10em;
  width: 20em;
  margin: auto;
  margin-bottom: 1em;
  display: grid;
  padding: 2em;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
}

.my-card-image {
  grid-column: 1;
  border-radius: 50%;
  max-width: 4em;
  max-height: 4em;
  justify-self: start;
  align-self: center;
}

.my-card-text {
  grid-column: 2;
  align-self: center;
  justify-self: start;
  word-break: break-word;
}
</style>