<template>
  <section id="about" class="container mt-5">
    <h1>About</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aut cum repellat fugiat laborum veniam labore doloribus libero? Impedit amet, dolor veritatis blanditiis iure natus temporibus eos eligendi adipisci. Delectus.</p>
    <article class="row mt-5">
      <h2>Skills</h2>
      <dl>
        <dt class="lead">HTML</dt>
        <dd>
          <div class="progress">
            <div class="progress-bar" style="width:90%"></div>
          </div>
        </dd>
        <dt class="lead">CSS</dt>
        <dd>
          <div class="progress">
            <div class="progress-bar" style="width:80%"></div>
          </div>
        </dd>
        <dt class="lead">JavaScript</dt>
        <dd>
          <div class="progress">
            <div class="progress-bar" style="width:50%"></div>
          </div>
        </dd>
        <dt class="lead">Vue.js</dt>
        <dd>
          <div class="progress">
            <div class="progress-bar" style="width:60%"></div>
          </div>
        </dd>

      </dl>
    </article>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {

    }
  }
  
}
</script>

<style lang="scss">
  #about {
    
  }

</style>