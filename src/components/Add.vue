<template>
  <Form :onPost="addMessage" />
</template>

<script>
import Form from "./components/Form";
export default {
  components: {
    Form,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    },
  },
};
</script>

<style></style>
