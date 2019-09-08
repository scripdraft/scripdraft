<template>
  <div id="shortcuts">
    <b>{{ $t("shortcuts.shortcuts") }}</b>
    <hr />
    <p>
      {{ $t("shortcuts.save") }}
      <span class="kbd">Ctrl</span> + <span class="kbd">Enter</span>
    </p>
    <p>
      {{ $t("shortcuts.previous") }}
      <span class="kbd">Ctrl</span> + <span class="kbd">Z</span>
    </p>
    <p>
      {{ $t("shortcuts.next") }}
      <span class="kbd">Ctrl</span> + <span class="kbd">Y</span>
    </p>
    <p>
      {{ $t("shortcuts.clear") }}
      <span class="kbd">Ctrl</span> + <span class="kbd">Backspace</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#shortcuts {
  text-align: left;
}

.kbd {
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-bottom-color: #c6cbd1;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #c6cbd1;
  color: #444d56;
  display: inline-block;
  font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}
</style>
