<template>
  <div>
    <div class="form">
      <Form :onPost="addMessage" />
    </div>
    <div class="list">
      <h2>リスト一覧</h2>
      <div class="devider"></div>
      <Spinner v-if="!initialLoaded" />
      <MessageList :messages="messages" />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
import MessageList from "../components/MessageList";
import ListModel from "../models/List";
import Spinner from "./Spinner";
export default {
  components: {
    MessageList,
    Form,
    Spinner,
  },
  data() {
    return {
      messages: [],
      initialLoaded: false,
    };
  },
  async created() {
    const messages = await this.fetchMessages();
    this.messages = messages;
    this.initialLoaded = true;
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await ListModel.fetchMessages();
      } catch (error) {
        // 読み込み失敗など、何かしらのエラーが発生したら
        // ユーザーにデータの取得が失敗したことを知らせる
        alert(error.message);
      }

      return messages;
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
  /* background: #eee; */
  border-right: 1px solid black;
}
.list {
  width: calc(100% - 500px);
  flex: 1;
  position: absolute;
  left: 500px;
}
</style>
