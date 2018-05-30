<template>
  <div class="home">
   <div class="home-head">
     <div><i class="fa fa-bars" aria-hidden="true"></i><span>HUE Search</span></div>
     <div><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
    </div>
    <div class="home-search">
      <Search />
      <SearchHint v-if="inputFlag"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Search from '@/components/search.vue';
import SearchHint from '@/components/search-hint.vue';
@Component({
  components: {
    HelloWorld,
    Search,
    SearchHint,
  },
})
export default class Home extends Vue {
  public inputFlag:boolean=false;
}
</script>
<style scoped lang="scss">
@import '../lib/font-awesome/css/font-awesome.min.css';
.home-head{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(60,75,83,0.8);
  height: 40px;
  color: white;
}
.home-head>div:nth-child(1){
  margin-left: 20px;
}
.home-head span{
  margin-left: 10px;
  font-size: 15px;
}
.home-head>div:nth-child(2){
  margin-right: 30px;
}
.home-search{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: rgb(42,54,66);
  text-align: center;
  position: relative;
}
// search-hint  让其浮动显示

</style>
