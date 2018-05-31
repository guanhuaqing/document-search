<template>
<div class="wrap">
    <div class="sidebar">
      <div>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div @click="closeSide('home')"><i class="fa fa-home" aria-hidden="true"></i><span>HOME</span></div>
      <div @click="closeSide('manual')"><i class="fa fa-book" aria-hidden="true"></i><span>MANUAL</span></div>
      <div @click="closeSide('history')">
        <i class="fa fa-clock-o" aria-hidden="true"></i><span>HISTORY</span>
      </div>
      <div @click="closeSide('settings')"><i class="fa fa-cog" aria-hidden="true"></i><span>SETTINGS</span></div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Sidebar extends Vue {
  closeSide(page:any){
    this.$emit("close-sidebar",[page]);
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  width: 180px;
  height: 100vh;
  text-align: left;
  background-color: white;
}
.sidebar>div{
  padding-left: 15px;
  color:rgb(169, 169, 169);
}
.sidebar span{
  color:rgb(116, 90, 105);
  margin-left: 10px;
  font-size: 13px;
}
.wrap{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: rgba(119, 120, 121,0.6);
}
</style>
