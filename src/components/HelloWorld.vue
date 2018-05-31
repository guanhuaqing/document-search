<template>
  <div class="helloworld">
    <div class="description">
      <div class="card">
        <div ><i class="fa fa-search" aria-hidden="true"></i></div>
        <div class="card-head">Advanced Search</div>
        <div class="card-content"> HUE Search provides many useful filters for you, and supports logic operators to help you construct powerful queries.</div>
      </div>
      <div class="card">
        <div ><i class="fa fa-keyboard-o" aria-hidden="true"></i></div>
        <div class="card-head">Less Input</div>
        <div class="card-content"> With various suggestions,HUE Search allowa you to input less to get ahat your want</div>
      </div>
      <div class="card">
        <div > <i class="fa fa-lightbulb-o" aria-hidden="true"></i></div>
        <div class="card-head">Advanced Search</div>
        <div class="card-content"> Powered by AI and NLP techniques,HUE Search can grasp your need quickly by analyzing your input and your characteristic.</div>
      </div>
    </div>
    <div class="history">
        <div>YOUR HISTORY</div>
        <div class="history-area">
          <div>
            <div class="Hexagon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
            <div>Query You Searched</div>
          </div>
          <div>
            <div class="Hexagon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
            <div>Document You Accessed</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {watch} from 'fs';

@Component
export default class HelloWorld extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../lib/common.scss';
.helloworld{
  height: calc(100% - 120px);
}
.description{
  @include display_flex;
  @include flex_direction(row);
  @include flex_justify_content(space-around);
  @include flex_aligin_items(center);
  height: 230px;
}
.card{
  width: 200px;
  div:nth-child(1){
    font-size: 15px;
  }
}
.card-head{
  font-size: 13px;
  font-weight: bold;
}
.card-content{
  font-size: 10px;
  color: rgb(133, 135, 143);
}
// 使用 css 来制作一个零星
.Hexagon{
  position: relative;
  width: 30px;
  height: 20px;
  line-height: 20px;
  color: white;
  text-align: center;
  background-color: rgb(66, 129, 240);
}
.Hexagon:before{
  content: "";
  width: 0px;
  height: 0px;
  position:absolute;
  top: -10px;
  left: 0px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 10px solid rgb(66, 129, 240);
}
.Hexagon:after{
  content: "";
  width: 0px;
  height: 0px;
  position:absolute;
  top: 20px;
  left: 0px;
  border: 10px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 10px solid rgb(66, 129, 240);
}
// 历史部分
.history{
  @include display_flex;
  @include flex_direction(column);
  @include flex_justify_content(center);
  @include flex_aligin_items(center);
  background-color: rgb(239, 241, 242);
  height: 200px;
}
.history-area{
  @include display_flex;
  @include flex_direction(row);
  @include flex_justify_content(center);
  @include flex_aligin_items(center);
  margin-top: 30px;
}
.history-area>div{
    width: 345px;
    height: 50px;
    @include display_flex;
    @include flex_direction(row);
    @include flex_justify_content(flex-start);
    @include flex_aligin_items(center);
    background-color: rgb(229, 231, 233);
    div{
      margin-left: 15px;
    }
}
.history-area>div:nth-child(2){
  margin-left: 20px;
}
</style>
