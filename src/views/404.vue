<template>
  <div
    id="404"
    class="container"
  >
    <div class="row">
      <div class="col">
        <h1>
          Error 404
        </h1>
        <img
          class="not-found"
          src="../assets/404.svg"
          alt="A Sad Ghost"
        >
        <h2>
          Were Sorry the page you were looking for was not found. Make sure you typed in the right address, or try again later.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

h1{
  font-size: 100px;
  padding-top: 20px;
}
.not-found{
 height: 40%;
 width: 40%;
 margin: 5%;
}
</style>