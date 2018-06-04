<template>
  <div class="filter">
    <div>
      <span>Filter by type</span>
      <div v-for="item in filters" class="filter-item" >
          <i :class="item.icon" aria-hidden="true"></i>
          <div>{{item.text}}</div>
      </div>
    </div>
    <div>
      <span>Filter by creator</span>
      <div v-for="owner in creatorFilters" class="filter-item" >
          <i :class="owner.icon" aria-hidden="true"></i>
          <div>{{owner.text}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    
  },
})
export default class MyFilter extends Vue {
  public filters = [
    {
      icon:`fa fa-file-o`,
      text:'All'
    },
    {
      icon:`fa fa-file-pdf-o`,
      text:'PDF'
    },
    {
      icon:`fa fa-file-text`,
      text:'Plain Text'
    },{
      icon:`fa fa-file-text`,
      text:'Document'
    },{
      icon:`fa fa-file-powerpoint-o`,
      text:'Spreadsheet'
    },
    {
      icon:`fa fa-file-video-o`,
      text:'presentation'
    },
    {
      icon:`fa fa-file-text`,
      text:'Web Page'
    },{
      icon:`fa fa-file-image-o`,
      text:'Image'
    },
    {
      icon:`fa fa-file-o`,
      text:'Other'
    }
  ];
  public creatorFilters = [
    {
      icon:`fa fa-users`,
      text:'Anyone'
    },
    {
      icon:`fa fa-user-o`,
      text:'Myself'
    },{
      icon:`fa fa-user-plus`,
      text:'Direct reports'
    },
    {
      icon:`fa fa-building-o`,
      text:'Affiliation organization'
    }
  ];
}
</script>
<style scoped lang="scss">
  .filter{
    width:230px;
    margin-left: 100px;
    margin-top: 60px;
    text-align:left;
    padding-left: 10px;
    color:rgb(126, 126, 126);
  }
  .filter span{
    font-size:15px;
    color:rgb(198, 189, 183);
  }
  .filter-item{
    height:20px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items:flex-start;
    cursor:pointer;
  }
  .filter-item > div{
    font-size:12px;
    color:rgb(126, 126, 126);
  }
    .filter-item > i{
      width:20px;
      height:10px;
    }
</style>
