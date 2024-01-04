<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/portfolio">portfolio</router-link>
    <router-link to="/about">about</router-link>
  </nav>

  <router-view :data="data"/>

</template>

<script>
import data from './assets/portfolio';

export default {
  name: 'App',
  data() {
      return {
        data: data,
      }
  },
}
</script>

<style lang="scss">
  section {
    padding-top: 88px;
  }

  nav {
    display: flex;
    gap: 3em;
    justify-content: center;
    background: #333;
    padding: 2em;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;

    a{
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

</style>