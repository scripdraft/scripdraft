<template>
  <div id="forgot-password">
    <div class="container">
      <div class="row">
        <div class="wrapper col-sm-6 offset-sm-3">
          <form>
            <h1>
              {{ $t("forget.reset") }}
            </h1>
            <hr />
            <input
              v-model="forgot.mail"
              class="forget-from-input"
              type="email"
              :placeholder="$t('forget.placeholder')"
            />
            <button class="btn btn-primary">
              {{ $t("forget.button") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forgot: {
        mail: ""
      }
    };
  }
};
</script>

<style scoped>
form h1 {
  margin-top: 30px;
}
.forget-from-input {
  width: 100%;
  border: 2px solid #ccc;
  font-size: 18px;
  padding: 7px 10px;
  border-radius: 3px;
}
.btn {
  margin-top: 20px;
}
.wrapper {
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
}
</style>
