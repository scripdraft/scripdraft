<template>
  <div class="container">
    <div class="row">
      <Workplace />
      <About />
      <div
        id="alert"
        class="container"
      >
        <div class="row">
          <div class="col">
            <b-alert
              :show="dismissCountDown"
              dismissible
              variant="warning"
              @customevent="showAlert"
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged"
            >
              <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
              <b-progress
                variant="warning"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              />
            </b-alert>
          </div>
        </div>
      </div>
      <b-button
        variant="info"
        class="m-1"
        @click="showAlert"
      >
        Want to delete this button, and Commit button should do the magic instead.
      </b-button>
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
        },
        data() {
            return {
                dismissSecs: 2.5,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            logHey(){
                console.log("hey");
            }
        },
    }
</script>

<style scoped>

.container{
    background-color:rgba(182, 183, 185, 0.068);
}
#alert{
    padding-top: 10px;
    text-align: center;
}


</style>