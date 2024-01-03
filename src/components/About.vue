<template>
  <section id="about" class="container mt-5">
    <h1>About</h1>
    <div class="row">
      <figure class="figure col-md-6 text-center">
        <img src="https://placehold.co/400" class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption text-center">About Michael Kwon</figcaption>
      </figure>
      <p class="col-md-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aut cum repellat fugiat laborum veniam
        labore
        doloribus libero? Impedit amet, dolor veritatis blanditiis iure natus temporibus eos eligendi adipisci. Delectus.
      </p>
    </div>
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
#about {}
</style>