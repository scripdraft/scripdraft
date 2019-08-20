<template>
  <div class="container">
    <div class="row">
      <Workplace />
      <About />
    </div>
  </div>
</template>

<script>
    import Workplace from "./Workplace";
    import About from "./About";
    export default {
        components: {
            Workplace,
            About,
        }
    }
</script>

<style>

</style>