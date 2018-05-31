<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="app-head">
     <div v-on:click="sidebarFlag = true"><i class="fa fa-bars" aria-hidden="true"></i><span>HUE Search</span></div>
     <div><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
    </div>
    <div class="home-search">
      <Search v-on:onFocus="inputFlag = true" v-on:onBlur="inputFlag = false"  @search-doc="searchDoc"/>
      <SearchHint v-if="inputFlag"/>
    </div>
    <Sidebar v-if="sidebarFlag" v-on:close-sidebar="pageChange"/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/sidebar.vue';
import Search from '@/components/search.vue';
import SearchHint from '@/components/search-hint.vue';
@Component({
  components: {
    Sidebar,
    Search,
    SearchHint
  },
})
export default class Home extends Vue {
  public sidebarFlag:boolean=false;
  public inputFlag:boolean=false;
  mouted(){
    closeService.closeSubject.subscribe((flag:any) => {
      console.log("hahaha");
      this.sidebarFlag = flag});
  }
  searchDoc(){
    console.log("search-doc");
    this.$router.push({path:'/about'});
  }
  pageChange(page:any){
    this.sidebarFlag = false;
    console.log(page);
    this.$router.push({name: page[0]})
  }
}
</script>

<style lang="scss">
@import './lib/font-awesome/css/font-awesome.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
}
//  头部导航条
.app-head{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(60,75,83,0.8);
  height: 40px;
  color: white;
}
.app-head>div:nth-child(1){
  margin-left: 20px;
}
.app-head span{
  margin-left: 10px;
  font-size: 15px;
}
.app-head>div:nth-child(2){
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
</style>
