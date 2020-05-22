<template>
  <div>
    <Header />
    <div class="main">
      <Main />
    </div>
  </div>
</template>

<script>
import "normalize.css";
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  components: {
    Main,
    Header,
  },
};
</script>

<style>
.main {
  display: flex;
  padding-top: 80px;
}
</style>
