<template>
    <div class="integral">
      <div class="first_line">
        <span @click="goBack()">
          <van-icon name="arrow-left" class="arrow-left pull-left"/>
        </span>
        <span class="title_name">积分商城</span>
      </div>
      <h3 class="p1">请重新进入</h3>
      <p class="p2">请返回后重新进入积分商城～</p>
      <img src="../img/regoto.png">
    </div>
</template>

<script>
    export default {
      name: "Integral",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .integral{
    background: #f5f5f5;
    text-align: center;
    height: 100%;
  }
  /*  第一行  */
  .first_line{
    line-height: 3.5rem;
    text-align: center;
    background: #3190e8;
  }
  .arrow-left{
    color: white;
    font-size: 2.5rem;
    line-height: 4rem;
  }
  .title_name{
    color: white;
    font-size: 2.5rem;
  }
  .p1{
    margin-top:13rem;
    color: #3190e8;
    font-weight: 600;
  }
  img{
    width: 13rem;
    height: 13rem;
  }

</style>
