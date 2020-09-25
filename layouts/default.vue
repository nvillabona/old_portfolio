<template>
  <div>
    <Navbar />
    <nuxt />
    
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>

/* @media (prefers-color-scheme: dark) {
  body{
    color: whi;
  }
} */
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #f9f9fb;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.jumbotron {
  margin-top: 1rem;
  animation: 1s appear;
  
}


@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


/* buttons */
.btn-primary{
  color: #fff;
  border: 1px solid #fff;
  background-color: #3b8070
}


.btn-primary:hover {
  border: 1px solid #00c58e;
  background-color: #00c58e;
}

.btn-secondary {
  
  border: 1px solid #fff;
  color: #fff;
  background-color: #35495e;
 
  /* margin-left: 15px; */
}

.btn-secondary:hover {
  color: #fff;
  background-color: #108775;
  border: 1px solid #108775;
}
</style>
