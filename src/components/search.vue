<template>
  <div class="search">
    <div><i class="fa fa-search" aria-hidden="true"></i></div>
    <div>
      <input placeholder="input search words!" v-model="searchText" @focus="onFocus" @blur="onBlur" @keyup.enter="searchDoc">
      <div id="searchClose" class="search-close" @click="clearInput" >
        <i class="fa fa-times" aria-hidden="true" v-if="this.searchText.length!=0"></i>
      </div>
    </div>
    <div @click="searchDoc">Search</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {watch} from 'fs';
import BUS from '../service/EventBus.vue';

@Component
export default class Search extends Vue {
  public searchText :any="";
  onFocus(){
    this.$emit('onFocus');
  }
  onBlur(){
    this.$emit('onBlur');
  }
  searchDoc(){
    console.log("hahaha");
    this.$emit('search-doc',this.searchText);
    BUS.$emit('search-about',this.searchText);
  }
  clearInput(event:any){
    console.log('clear');
    this.$emit('onBlur');
    this.searchText = "";
  }


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
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  input{
    border: none;
    height: 100%;
    width: 370px;
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
  cursor: pointer;
}
.search-close{
  display: inline-block;
  width: 20px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  font-size: 10px;
}
</style>
