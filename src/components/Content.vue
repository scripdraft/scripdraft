<template>
    <div class=container>
        <div class="row">
            <Workplace></Workplace>
            <About></About>
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

<style scoped>

.container{
    background-color:rgba(182, 183, 185, 0.068);
}

</style>