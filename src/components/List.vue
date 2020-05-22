<template>
  <div>
    <h1>リスト一覧</h1>
    <Form :onPost="addMessage" />
    <div class="devider"></div>
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import Form from "../components/Form";
import MessageList from "../components/MessageList";
export default {
  components: {
    MessageList,
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

<style>
h1 {
  text-align: center;
}
.devider {
  border-top: 10px solid #ccc;
}
</style>
