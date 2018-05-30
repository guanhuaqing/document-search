<template>
  <div class="search">
    <div><i class="fa fa-search" aria-hidden="true"></i></div>
    <div><input placeholder="input search words!" ></div>
    <div>Search</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {watch} from 'fs';

@Component
export default class Search extends Vue {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search{
  width:480px;
  height:30px;
  display: flex;
  background-color: white;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  div{
    height: 100%;
  }
}
.search >div:nth-child(1){
  width: 30px;
  line-height: 30px;
  text-align: center;
  color: rgb(135,192,248);
}
.search >div:nth-child(2){
  flex:1;
  input{
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    text-indent: 0.2em;
  }
}
.search >div:nth-child(3){
  width:60px;
  background-color: rgb(66,129,240);
  color: white;
  line-height: 30px;
  font-size: 13px;
}
</style>
