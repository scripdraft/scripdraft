<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue";
    export default {
        name: "App",
        components: {
            Header,
            Footer,
        }
    };
</script>

<style>

html{
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 100px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
