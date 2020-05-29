<template>
  <button class="button" @click="onClick" :disabled="!clickable">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "追加",
    },
    onClick: {
      type: Function,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  background: #17a2b8;
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;
}
/* .button:hover {
  background: rgb(248, 253, 253);
} */
.button:active {
  background: rgb(13, 78, 138);
}
</style>
