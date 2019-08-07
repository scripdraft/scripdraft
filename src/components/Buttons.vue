<template>
  <div id="buttons">
    <div class="mt-3">
      <b-button-group>
        <b-button variant="info">
          {{ $t("back") }}
        </b-button>
        <b-button variant="success">
          {{ $t("commit") }}
        </b-button>
        <b-button variant="info">
          {{ $t("forward") }}
        </b-button>
      </b-button-group>
    </div>
    <div class="mt-1">
      <b-button-group>
        <b-button variant="warning">
          {{ $t("reset") }}
        </b-button>
        <b-button variant="danger">
          {{ $t("clear") }}
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
    export default {};
</script>

<style scoped>
#buttons {
  align-content: center;
  text-align: center;
}
</style>
