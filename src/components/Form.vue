<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <label>食事：</label>
        <div class="form-group">
          <textarea
            placeholder=""
            class="form-control"
            v-model="meal"
          ></textarea>
        </div>

        <label>筋トレ：</label>
        <div class="form-group">
          <input class="form-control" v-model="training" />
        </div>

        <label>体重：</label>
        <div class="form-group">
          <select class="form-control" v-model="weight">
            <option value="53kg">53kg</option>
            <option value="54kg">54kg</option>
            <option value="55kg">55kg</option>
            <option value="56kg">56kg</option>
            <option value="57kg">57kg</option>
            <option value="58kg">58kg</option>
            <option value="59kg">59kg</option>
            <option value="60kg">60kg</option>
            <option value="61kg">61kg</option>
            <option value="62kg">62kg</option>
            <option value="63kg">63kg</option>
            <option value="64kg">64kg</option>
            <option value="65kg">65kg</option>
          </select>
        </div>

        <div class="button">
          <Button title="追加" :onClick="post" :clickable="canPost" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import ListModel from "../models/List";
export default {
  components: {
    Button,
  },
  props: {
    onPost: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      meal: "",
      training: "",
      weight: "",
      canPost: true,
    };
  },
  methods: {
    async post() {
      try {
        this.canPost = false;
        const list = await ListModel.save({
          meal: this.meal,
          training: this.training,
          weight: this.weight,
        });
        this.onPost(list);
        this.meal = "";
        this.training = "";
        this.weight = "";
      } catch (error) {
        alert(error.list);
      }
      this.canPost = true;
    },
  },
};
</script>

<style scoped>
.button {
  text-align: center;
  margin-top: 10px;
}

textarea {
  resize: none;
}
</style>
