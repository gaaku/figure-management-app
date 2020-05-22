<template>
  <div>
    <div class="form">
      <Form :onPost="addMessage" />
    </div>
    <div class="list">
      <h2>リスト一覧</h2>
      <div class="devider"></div>
      <MessageList :messages="messages" />
    </div>
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
h1,
h2 {
  text-align: center;
  font-family: serif;
}
.devider {
  border-top: 10px solid #ccc;
}
.form {
  position: fixed;
  width: 499px;
  height: 100vh;
  background: #eee;
  border-right: 1px solid black;
}
.list {
  width: calc(100% - 500px);
  flex: 1;
  position: absolute;
  left: 500px;
}
</style>
