<template>
  <div id="home">
    <Content />
  </div>
</template>

<script>
    import Content from "@/components/Content.vue";
    export default {
        name: "Home",
        components: {
            Content
        }   
    }
</script>

<style scoped>
.container{
    background-color:rgba(182, 183, 185, 0.068);
}
</style>