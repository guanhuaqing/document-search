<template>
  <div class="card">
    <div class="card-title">
        <div>{{searchItem.type}}</div>
        <div>{{searchItem.title}}</div>
        <div><i class="fa fa-calendar" aria-hidden="true"></i><span>{{setCreatedTime(searchItem.createdTime)}}</span></div>
        <div><i class="fa fa-file-text" aria-hidden="true"></i><span>23KB</span></div>
        <div><i class="fa fa-user-o" aria-hidden="true"></i><span>{{searchItem.author}}</span></div>
    </div>
    <div class="card-description">
      {{searchItem.text}}
    </div>
    <div class="card-path">
      <div>文件路径</div>
      <div>Tag Management</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as moment from 'moment';


@Component({
  components: {
    
  }
})
export default class Card extends Vue {
  @Prop() public searchItem:any;
  private _createdTime:any = '';
  mounted(){
    // console.log(this.searchItem);
  }

  setCreatedTime(time:any){
    return moment(time).format('YYYY年MM月DD日');
  }
}
</script>
<style scoped lang="scss">
@import '../lib/common.scss';
  .card{
    width: 600px;
    min-height: 100px;
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
