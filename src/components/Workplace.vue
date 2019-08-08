<template>
  <div
    id="workplace"
    class="col col-12 col-sm-4"
  >
    <h1 id="maintitle">
      {{ $t('draft') }}
    </h1>

    <hr>
    <div class="form-group blue-border-focus">
      <label for="textarea1">{{ $t('draftText') }}</label>
      <textarea
        id="textarea1"
        autofocus
        class="form-control"
        rows="7"
      />
    </div>
    <Buttons />
  </div>
</template>

<script>
    import Buttons from "./Buttons";
    export default {
        components: {
            Buttons,
        },
    };
</script>

<style scoped>
    #workplace {
        text-align: left;
    }
    #maintitle {
        margin-top: 20px;
    }
    .blue-border-focus .form-control:focus {
    border: 1px solid #4aa1c3;
    box-shadow: 0 0 0 0.2rem rgba(74, 102, 195, 0.25);
}
</style>