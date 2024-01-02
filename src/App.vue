<template>
  <nav>
    <a href="#">home</a>
    <a href="#">portfolio</a>
  </nav>
  <Title />

</template>

<script>
import Title from './components/Title.vue';

export default {
  name: 'App',
  components: {
    Title: Title,
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