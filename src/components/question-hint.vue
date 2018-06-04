<template>
  <div class="hint">
    <div class="triangle"></div>
    <div class="hint-content">
      <div>Did you want?</div>
      <div>
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        Order by Modified
      </div>
      <div>
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        Order by popularity
      </div>
      <div>
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        Order by rescent popularity
      </div>
      <div>
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        Display only English documents
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component,Prop,Vue,Watch} from 'vue-property-decorator';
@Component
export  default class QuestionHint extends Vue{
  
}
</script>
<style scoped lang="scss">
  .hint{
    width:620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .triangle{
    position: relative;
    width: 0px;
    height: 0px;
    left: 440px;
    bottom: -1px;
    border: 30px solid transparent;
    border-bottom: 30px solid white;
  }
  .hint-content{
    width: 100%;
    height:130px;
    background-color: white;
    border: 1px solid rgb(232, 232, 232);
    div{
      margin: 0px 20px;
      text-align: left;
    }
  }
  .hint-content>div:first-child{
    height:30px;
    line-height: 30px;
    color:rgb(175, 192, 174);
    font-size: 13px;
    border-bottom: 1px solid lightgrey;
  }
 .hint-content>div:not(:first-child){
   color:rgb(95, 155, 245); 
   font-size: 12px;
   margin-top: 5px;
 }
</style>
