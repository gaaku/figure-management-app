<template>
  <div class="message-list">
    <template v-for="(message, index) in messages">
      <Message
        :key="index"
        :meal="message.meal"
        :training="message.training"
        :weight="message.weight"
        :date="message.date"
      />
    </template>
  </div>
</template>

<script>
import Message from "./Message";
export default {
  components: {
    Message,
  },
  props: {
    messages: {
      type: Array,
      required: true,
      validator: function(messages) {
        return messages.every((message) => {
          if (typeof message.date !== "string") {
            return false;
          }
          if (typeof message.meal !== "string") {
            return false;
          }
          if (typeof message.training !== "string") {
            return false;
          }
          if (typeof message.weight !== "string") {
            return false;
          }
          return true;
        });
      },
    },
  },
};
</script>

<style scoped></style>
