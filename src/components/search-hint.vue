<template>
  <div class="hint">
    <div class="triangle"></div>
    <div class="hint-content">
      <div>Advanced Search</div>
      <div>
          Apply conditional filters to the query by input filters like data:2014,-type:pdf.
          To see more filters,press key + / -
      </div>
      <div>
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i> Use "-" to exclude query keywords and filters,for example "-workflow" or "-type:pdf"
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component,Prop,Vue,Watch} from 'vue-property-decorator';
@Component
export  default class SearchHint extends Vue{
  
}
</script>
<style scoped lang="scss">
  .hint{
    position: absolute;
    top: 50px;
    left: calc(50% - 240px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;
  }
  .triangle{
    position: relative;
    width: 0px;
    height: 0px;
    margin-left: 40px;
    bottom: -1px;
    border: 10px solid transparent;
    border-bottom: 10px solid white;
  }
  .hint-content{
    width: 420px;
    background-color: white;
    border: 1px solid rgb(232, 232, 232);
    div{
      padding: 0px 10px;
      text-align: left;
    }
  }
  .hint-content>div:nth-child(1){
    font-weight: 550;
    font-family: sans-serif;
    font-size: 13px;
  }
   .hint-content>div:nth-child(2){
    font-weight: 300;
    font-size: 11px;
    // color: rgb(165, 174, 154);
  }
   .hint-content>div:nth-child(3){
    background-color: rgb(244, 245, 246);
    color: rgb(133, 135, 143);
    font-size: 10px;
  }
</style>
