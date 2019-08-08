<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Content from "./components/Content.vue";
    import Footer from "./components/Footer.vue";
    export default {
        name: "App",
        components: {
            Header,
            Content,
            Footer,
        }
    };
</script>

<style>

html,
body {
  height: 100%;
  position: relative;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
