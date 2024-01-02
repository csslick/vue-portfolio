<template >
  <section id="title">
    <div class='container p-5'>
      <div class="detail row">
        <figure class="image col-md-6">
          <img src="../assets/images/title.png" alt="title">
        </figure>
        <div class="text col-md-6">
          <h2 
            class="text-light" 
            v-html="title"
          ></h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Title',
    data() {
     return {
      title: 'Hello,<br>I\'m Michael Kwon',
     }
    }
  }
</script>

<style lang="scss">
  #title {
    background: #333;
    text-align: center;
    height: 100dvh;

    &>div {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .detail {
      display: flex;
      flex-direction: row-reverse;
      height: 100%;
      justify-content: space-around;
      align-items: center;

      .text h2 {
        font-size: 4em;
      }
    }

    @media screen and (max-width: 768px) {
      .detail {
        // border: 2px solid red;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: space-around;

        .text h2 {
          font-size: 2em;
        }
      }
    }

    img {
      width: 100%;
      padding: 40px;
    }

    .text,
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>