<template>
  <div class="about" >
    <MyFilter />
    <div class="about-content" id="about-content">
       <QuestionHint />
       <div class="content-wrap" id="content-wrap">
          <card  v-for="(card) in cards" :key="card.id" :searchItem="card"/>
       </div>
    </div>
    <div class="time-filter">
      <div><i class="fa fa-sun-o" aria-hidden="true"></i> the past day</div>
      <div><i class="fa fa-sun-o" aria-hidden="true"></i> the past week</div>
      <div><i class="fa fa-sun-o" aria-hidden="true"></i> the past month</div>
      <div><i class="fa fa-sun-o" aria-hidden="true"></i> the past year</div>
      <Calendar />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyFilter from '@/components/filter.vue';
import Calendar from '@/components/calendar.vue';
import QuestionHint from '@/components/question-hint.vue';
import Card from '@/components/card.vue';
import BUS from '../service/EventBus.vue';

@Component({
  components: {
    MyFilter,
    Calendar,
    QuestionHint,
    Card,
  },
})
export default class About extends Vue {
  public cards = [];
  public searchText = "";
  public currentPage = 0;
  beforeCreate(){
  //  console.log("before create");
  }
  created(){
    console.log("create");
     this.searchText = this.$route.params.searchValue;
     this.$http.get(this.searchURL(this.searchText,0,10))
                .then((res:any) => this.cards = res.body)
  }
  
  mounted(){
   BUS.$on('search-about',(text:any) => {
     console.log(text);
     this.searchText = text;
     this.$http.get(this.searchURL(this.searchText,0,10)).then((res:any) => this.cards = res.body);
   });
   let self = this;
   document.getElementById("content-wrap").addEventListener('scroll', function(){
     console.log("scroll");
     if(this.scrollTop + this.offsetHeight >= this.scrollHeight){
         self.currentPage ++;
         self.$http.get(self.searchURL(self.searchText,10 * (self.currentPage),10))
                    .then((res:any) => {
                      self.cards = res.body;
                      this.scrollTop = this.offsetHeight / 2;
                    });
　　    }
   });
  }

 
  scrollEvent(){
    console.log("scroll event");
  }
  searchURL(queryText:any,position:any,length:any) {
    return `http://47.100.238.22:8080/search?query=${queryText}&startPosition=${position}&length=${length}`;
  }
}
</script>
<style scoped lang="scss">
@import '../lib/common.scss';
  .about{
    @include display_flex;
    @include flex_direction(row);
    @include flex_justify_content(space-around);
    @include flex_aligin_items(flex-start);
    min-height:calc(100vh - 120px);
    background-color:rgb(239, 241, 242);
  }
  .about-content{
    flex:1;
    @include display_flex;
    @include flex_direction(column);
    @include flex_justify_content(center);
    @include flex_aligin_items(center);
  }
  .content-wrap{
    overflow-y: scroll;
    height: 560px;
    margin-top: 20px;
  }
  .time-filter{
    text-align: left;
    margin-top: 60px;
    margin-right: 200px;
  }
  .time-filter>div{
    font-size: 13px;
    cursor: pointer;
  }

</style>
