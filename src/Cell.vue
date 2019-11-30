<template>
  <div>
    <div class="cell" @click="onClickSelf">
      <template v-if="a">{{text}}</template>
      <template v-else></template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["m", "finished"],
  data() {
    return { a: false, text: "" };
  },
  methods: {
    onClickSelf() {
      if (this.text !== "") {
        return;
      }
      if (this.finished) {
        return;
      }
      this.a = true;
      this.text = this.m % 2 === 0 ? "X" : "O";
      this.$emit("click", this.text); // 通知App它被点了,传入参数this.text
    }
  }
};
</script>

<style>
.cell {
  width: 100px;
  height: 100px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  cursor: default;
}
</style>