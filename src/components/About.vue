<template>
  <div
    id="about"
    class="col col-12 col-sm-4"
  >
    <h1 id="about-title">
      {{ $t("about") }}
    </h1>
    <hr>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nam quos,
    provident, corporis animi in perferendis a eius est corrupti et adipisci
    quibusdam iste, saepe tempora blanditiis doloremque facere voluptates!
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
