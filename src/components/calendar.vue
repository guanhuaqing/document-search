<template>
  <div class="calendar">
    <ol class="tree">
      <li>
			<label for="folder1">{{myDate.getFullYear()}}</label> 
			<input type="checkbox"  id="folder1" checked="checked" /> 
			<ol>
				<li v-for="(month,index) in months"  v-bind:key="month">
          <label :for="month">{{month}}</label>
          <input type="checkbox" :id="month" />
					<ol>
						<li class="file" v-if="month<currentMonth || today > 20">
							<label :for="month+index+1">late {{month}}</label> 
              <input type="checkbox" :id="month+index+1" /> 
							<ol>
                  <li class="file" v-for="day3 in computeLateDays(months.length -1 - index)" v-if="month<currentMonth || day3 <= today" v-bind:key="day3">
                    <span>{{month}} {{day3}}</span>
                  </li>
              </ol>
						</li>

						<li class="file" v-if="month<currentMonth || today > 10">
              <label :for="month+index+2">middle {{month}}</label> 
              <input type="checkbox" :id="month+index+2" /> 
							<ol>
                  <li class="file" v-for="day2 in myDays" v-if="month<currentMonth || (day2+10) <= today" v-bind:key="day2"><span>{{month}} {{10+day2}}</span></li>
							</ol>
            </li>
						<li class="file">
              <label :for="month+index+3">early {{month}}</label> 
              <input type="checkbox" :id="month+index+3" /> 
							<ol>
                  <li class="file" v-for="day1 in myDays" v-if="month<currentMonth || day1 <= today" v-bind:key="day1"><span>{{month}} {{day1}}</span></li>
							</ol>
            </li>
					</ol>
				</li>
			</ol>

		</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide  } from 'vue-property-decorator';
import {MonthEN} from "../lib/const";
 const MonthToDaysPing = [31,28,31,30,31,30,31,31,30,31,30,31];
 const MonthToDaysRun =  [31,29,31,30,31,30,31,31,30,31,30,31];
@Component({
  components: {
    
  },
})
export default class Calendar extends Vue {
  public myDate = new Date();
  public today = this.myDate.getDate();
  public currentMonth = MonthEN[this.myDate.getMonth()];
  mounted(){
    console.log(this.myDate.getFullYear());
  }
  runYear(year:any){
    return ((year%4==0)&&(year%100!=0))||(year%400==0);//run年2月29天
  }
  get months(){
    var res = [];
    for(var i =this.myDate.getMonth();i>=0;i--){
      res.push(MonthEN[i]);
    }
    return res;
  }
  
  get myDays(){
    return [10,9,8,7,6,5,4,3,2,1]
  }
  computeLateDays(value: any){
    let days = [],res = [];
    if(this.runYear(this.myDate.getFullYear())){
      days = MonthToDaysRun;
    }else{
      days = MonthToDaysPing;
    }
    for(var i =days[value] ;i>=21 ; i--){
      res.push(i);
    }
    return res;
  }
}
</script>
<style scoped lang="scss">
  ol.tree {
      width: 200px;
	}
  li {
	  position: relative;
    margin-left: -15px;
    list-style: none;
	}
  li.file{
	  margin-left: -18px !important;
	}
  li.file span{
	  background-image: url("../assets/document.png");
     background-position: left center;
     background-repeat: no-repeat;
	  color: #002446;
	  padding-left: 21px;
	  text-decoration:none;
	  display: block;
    font-size: 11px;
    cursor: pointer;
	}
  li input{
	   position: absolute;
	    left: 0;
	    margin-left: 0;
	    opacity: 0;
	    z-index: 2;
	    cursor: pointer;
	    height: 1em;
	    width:1em;
	    top: 0;
	}
  input + ol{
	    display: none;
	}
	input + ol > li { 
	    height: 0;
	    overflow: hidden;
	   margin-left: -14px !important;
	   padding-left: 1px; 
     margin-top: 3px;
	}
	li label {
	  cursor: pointer;
	  display: block;
    text-align: left;
	  padding-left: 17px;
    font-size: 13px;
	  background-image: url("../assets/document.png");
     background-repeat: no-repeat;
     background-position: left center;
	}
	input:checked + ol {
    //  background-image: url("../assets/document.png");
    //  background-repeat: no-repeat;
	   margin: -22px 0 0 -44px;
	   padding:27px 0 0 80px;
	   height: auto;
	   display: block;
	}
	input:checked + ol > li { 
	  height: auto;
	}

</style>
