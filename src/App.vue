<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/portfolio">portfolio</router-link>
    <router-link to="/about">about</router-link>
  </nav>
  <router-view />

</template>

<script>
// import TitleSection from './components/Title.vue';
// import Portfolio from './components/Portfolio.vue';

export default {
  name: 'App',
  components: {
    // TitleSection: TitleSection,
    // Portfolio: Portfolio,
  }
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