<template>
  <div id="about">
    <h1 id="about-title">
      {{ $t("about.about") }}
    </h1>
    <hr />
    {{ $t("about.context") }}
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
