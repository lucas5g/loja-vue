<template>
  <div class="input-block">
    <label>
      {{label}}
      <input type="text"  required v-model="value"  />
    </label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    value: String
    // value: String,
  },
};
</script>

<style>
</style>