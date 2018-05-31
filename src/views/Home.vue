<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    // Search,
    // SearchHint,
  },
})
export default class Home extends Vue {
  public inputFlag:boolean=false;
}
</script>
<style scoped lang="scss">
@import '../lib/font-awesome/css/font-awesome.min.css';
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
