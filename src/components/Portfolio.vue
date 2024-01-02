<template>
  <section id="portfolio" class="container mt-5">
    <h1>Portfolio</h1>
    <ul class="list row">
      <li class="col-md-4" v-for="item in data">
        <img 
          :src="`${item.imgUrl}`" 
          :alt="`${item.title}`"
        />
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
        <small class="text-secondary">{{  item.skills }}</small>
        <p><a :href="`${item.link}`" class="btn btn-primary mt-4">상세보기</a></p>
      </li>
    </ul>
  </section>
</template>

<script>
  import data from '../assets/portfolio.js';

  export default {
    name: "Portfolio",
    data() {
      return {
        data: data,
      }
    },
  }
</script>

<style lang="scss">
  #portfolio {
    h1 { margin-bottom: 1rem; }
    .list {
      list-style-type: none;
      padding: 0;

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 10vh;
        img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: top;
        }
        h4 { margin-top: 1rem; }
      }
    }
  }
</style>