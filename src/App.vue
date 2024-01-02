<template>
  <nav>
    <a href="#">home</a>
    <a href="#">portfolio</a>
  </nav>
  <TitleSection />
  <Portfolio/>

</template>

<script>
import TitleSection from './components/Title.vue';
import Portfolio from './components/Portfolio.vue';
export default {
  name: 'App',
  components: {
    TitleSection: TitleSection,
    Portfolio: Portfolio,
  }
}
</script>

<style lang="scss">
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