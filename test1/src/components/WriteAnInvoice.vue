<template>
  <div class="whole">
    <!--  头部  -->
    <div class="first_line">
      <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
      <span class="title_name">购买记录</span>
    </div>
    <div class="main">
      <img src="../img/NoTransaction.png">
      <p>没有购买记录</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "WriteAnInvoice",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .whole{
    /*background-color: #f5f5f5;*/
    height: 100%;
  }
  /*  头部  */
  .first_line{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
  .main{
    text-align: center;
  }
  img{
    display: inline-block;
    width: 15rem;
    margin-top: 30%;
    margin-bottom: 2rem;
  }
</style>
