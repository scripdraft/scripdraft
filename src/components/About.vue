<template>
  <div
    id="about"
    class="col col-12 col-sm-8"
  >
    <h1 id="about-title">
      {{ $t("about") }}
    </h1>
    <hr>
    {{ $t("aboutText") }}
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  #about {
    margin-top: 20px;
    text-align: left;
  }
  @media only screen and (min-width: 768px) {
    #about {
      text-align: right !important;
    }
  }
</style>
