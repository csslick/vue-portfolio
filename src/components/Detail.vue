<template lang="">
  <section id="detail" class="container mt-5">
    <h1 class="mb-4">
      {{ data[$route.params.id].title }}
      <span class="badge bg-secondary">{{ data[$route.params.id].category }}</span>
    </h1>
    <article class="pb-5">
      <img 
        :src="`/${data[$route.params.id].imgUrl}`" 
        :alt="`${data[$route.params.id].title}`"
      />
      <p>{{ data[$route.params.id].desc }}</p>
      <small class="text-secondary">{{ data[$route.params.id].skills }}</small>
      <p>
        <a 
          :href="`${data[$route.params.id].link}`" 
          class="btn btn-primary mt-4"
          target="_blank"
        >홈페이지
        </a>
      </p>
      <br>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta nihil earum harum possimus quidem minus voluptatibus vitae expedita quia voluptatem dolorum pariatur omnis, molestias, placeat quo cumque deserunt at.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, consequatur. Alias dignissimos beatae sequi corrupti atque ducimus expedita optio voluptatum maiores nisi, vero nobis consequatur neque ut soluta nemo aliquam!</p>
      <button @click="$router.push('/portfolio')" class="btn btn-secondary">돌아가기</button>
    </article>
  </section>
</template>
<script>

export default {
  name: "Detail",
  props: {
    data: Array,
  },
  mounted() {
    console.log(this.data); // props로 받은 데이터 확인
  }
}
</script>
<style lang="scss">

  #detail h1 {
    display: flex;
    gap: 1rem;
    align-items: center;
    .badge {
      font-size: small;
    }
  }

  article {
    img {
      width: 100%;
      aspect-ratio: 8/3;
      object-fit: cover;
      object-position: top;
      margin-bottom: 1em;
    }
  
  }
</style>