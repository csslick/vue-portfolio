<template>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Logo</a> -->
    <router-link to="/" class="navbar-brand">Logo</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio">portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
}
</script>
<style lang="scss">
  
</style>