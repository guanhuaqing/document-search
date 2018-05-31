<template>
  <div class="card">
    <div class="card-title">
        <div> txt</div>
        <div>03-test.txt</div>
        <div><i class="fa fa-calendar" aria-hidden="true"></i><span>2016年8月30日</span></div>
        <div><i class="fa fa-file-text" aria-hidden="true"></i><span>23KB</span></div>
        <div><i class="fa fa-user-o" aria-hidden="true"></i><span>unknown</span></div>
    </div>
    <div class="card-description">
      这个文件巨牛鼻
    </div>
    <div class="card-path">
      <div>文件路径</div>
      <div>Tag Management</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    
  },
})
export default class Card extends Vue {
  
}
</script>
<style scoped lang="scss">
@import '../lib/common.scss';
  .card{
    width: 600px;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: white;
    @include display_flex;
    @include flex_direction(column);
    @include flex_justify_content(center);
    @include flex_aligin_items(flex-start);
  }
  .card-title,.card-description{
    @include display_flex;
    @include flex_direction(row);
    @include flex_justify_content(flex-start);
    @include flex_aligin_items(center);
    div{
      font-size: 11px;
    }
  }
  .card-title>div:nth-child(n+2) span{
    padding-left:5px 
  }
  .card-title >div:nth-child(1){
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background-color:rgb(66, 129, 240);
    color:white;
  }
  .card-title >div:nth-child(2){
    margin-left: 20px;
  }
  .card-title >div:nth-child(3){
    margin-left: 230px;
  }
  .card-title >div:nth-child(4){
    margin-left: 20px;
  }
  .card-title >div:nth-child(5){
    margin-left: 20px;
  }
  .card-path{
    width: 100%;
      @include display_flex;
     @include flex_direction(row);
      @include flex_justify_content(space-between);
      @include flex_aligin_items(center);
      font-size: 11px;
  }
</style>
