<template>
  <div class="about">
    <MyFilter />
    <div class="about-content">
       <QuestionHint />
       <card />
       <card />
       <card />
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

@Component({
  components: {
    MyFilter,
    Calendar,
    QuestionHint,
    Card,
  },
})
export default class About extends Vue {
  
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
  .time-filter{
    text-align: left;
    margin-right: 50px;
  }
  .time-filter>div{
    font-size: 13px;
  }

</style>
