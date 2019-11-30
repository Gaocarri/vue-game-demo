<template>
  <div class="container">
    <div class="number">第{{n}}手</div>
    <div class="wrapper">
      <div class="row">
        <Cell @click="onClickCell(0,$event)" :m="n" :finished="finished" />
        <!-- //click时传入参数1，$event(对应cell里的this.text),把app里的n的值赋给m传给Cell
        -->
        <Cell @click="onClickCell(1,$event)" :m="n" :finished="finished" />
        <Cell @click="onClickCell(2,$event)" :m="n" :finished="finished" />
      </div>
      <div class="row">
        <Cell @click="onClickCell(3,$event)" :m="n" :finished="finished" />
        <Cell @click="onClickCell(4,$event)" :m="n" :finished="finished" />
        <Cell @click="onClickCell(5,$event)" :m="n" :finished="finished" />
      </div>
      <div class="row">
        <Cell @click="onClickCell(6,$event)" :m="n" :finished="finished" />
        <Cell @click="onClickCell(7,$event)" :m="n" :finished="finished" />
        <Cell @click="onClickCell(8,$event)" :m="n" :finished="finished" />
      </div>
    </div>
    <div class="victory">{{result===null?`胜负未分`:`胜负已分：${text}赢了`}}</div>
  </div>
</template>

<script>
import Cell from "./Cell";
import { log } from "util";
import { finished } from "stream";
export default {
  //单组件事件
  components: { Cell },
  data() {
    return {
      n: 0,
      text: null,
      map: [[null, null, null], [null, null, null], [null, null, null]],
      result: null,
      finished: false
    };
  },
  methods: {
    onClickCell(i, text) {
      this.text = text;
      this.map[Math.floor(i / 3)][i % 3] = text;
      this.n = this.n + 1;
      this.tell();
    },
    tell() {
      for (let i = 0; i <= 2; i++) {
        if (
          this.map[i][0] !== null &&
          this.map[i][0] === this.map[i][1] &&
          this.map[i][1] === this.map[i][2]
        ) {
          this.result = true;
          this.finished = true;
        }
      }
      for (let j = 0; j <= 2; j++) {
        if (
          this.map[0][j] !== null &&
          this.map[0][j] === this.map[1][j] &&
          this.map[1][j] === this.map[2][j]
        ) {
          this.result = true;
          this.finished = true;
        }
      }
      if (
        this.map[0][0] !== null &&
        this.map[0][0] === this.map[1][1] &&
        this.map[1][1] === this.map[2][2]
      ) {
        this.result = true;
        this.finished = true;
      }
      if (
        this.map[0][2] !== null &&
        this.map[0][2] === this.map[1][1] &&
        this.map[1][1] === this.map[2][0]
      ) {
        this.result = true;
        this.finished = true;
      }
    }
  }
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-direction: column;
}
.row {
  display: flex;
}
.victory,
.number {
  font-size: 50px;
}
</style>
