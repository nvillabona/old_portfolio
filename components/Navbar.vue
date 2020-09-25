<template>
<div>
  <b-nav shadow="true">
    <div class="container">
      <div class="row">
      <nuxt-link to="/"><img class="nav-logo" src="../static/nav-logo.png" alt="Logo"/> </nuxt-link>
        <nuxt-link to="/Projects" class="nav-link">Projects</nuxt-link >
        <nuxt-link to="/Courses" class="nav-link">Courses</nuxt-link >
        <nuxt-link to="/Contact" class="nav-link">Contact</nuxt-link >
        
      </div>
      
    </div>

  </b-nav>
</div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style >



/* nav elements */
.nuxt-link-exact-active{
  background-color: #e9ecef;
  
}
.nav-link{
  color: #384c61;
  font-weight: 400;
  margin-left: 1%;
  font-size: 1.2rem;
  text-align: center;
  vertical-align: middle;
 
  }




.nav-link:hover{
background-color: #70B5A4;
color: #fff;
border: 1px #70B5A4 ;
}

.nav{
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
  
}

.nav-logo{
  width: 2.5rem;
  margin-left: 1rem;
}
.nux-link-active{
  background-color: green;
}


</style>