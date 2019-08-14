<template>
  <div class="service_center">
    <!--  头部  -->
    <div class="head">
      <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
      <span class="title_name">下载</span>
    </div>
    <!--  main  -->
    <div class="main">
      <img src="../img/download.jpg">
      <p class="p1">下载饿了么APP</p>
      <p class="p2" @click="download_btn">下载</p>
      <div class="cartridge_frame" v-if="!show">
        <img src="../img/warning.png" class="warning">
        <p class="temporary">IOS用户请前往AppStore下载</p>
        <p class="sure" @click="sure_btn_hidden()">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DownloadApp",
      data(){
        return{
          show: true,
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
        //   点击确认支付   出现提示框
        download_btn(){
          this.show = false;
        },
        //   点击确认，提示框消失
        sure_btn_hidden(){
          this.show = true;
          // console.log('000');
        },
      }
    }
</script>

<style scoped>
  .service_center{
    width: 100%;
    height: 100%;
    /*animation: fadeInRight 0.2s linear forwards;*/
  }
  /*  头部  */
  .head{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  /*  main  */
  .main{
    padding-top: 6rem;
    text-align: center;
}
  img{
    border-radius: 2rem;
  }
  .p1{
    color: #666;
    font-size: 2rem;
    line-height: 2.7rem;
    margin-bottom: 2.7rem;
  }
  .p2{
    width: 90%;
    color: white;
    background: #4cd964;
    border-radius: 0.5rem;
    font-size: 2rem;
    font-weight: 700;
    margin: 3% 5% 0 5%;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
  }
  /*   提示框  */
  .cartridge_frame{
    animation: bounceIn 0.3s linear forwards;
    width: 23rem;
    height: 17rem;
    position: fixed;
    top: 30%;
    left: 13%;
    border-radius: 1rem;
    background: white;
    text-align: center;
    padding-top: 1rem;
  }
  .warning{
    width: 7.5rem;
  }
  .temporary{
    font-size: 1.5rem;
  }
  .sure{
    color: white;
    font-size: 2rem;
    font-weight: 600;
    position: absolute;
    left:0;
    bottom: 0;
    right: 0;
    background: #4cd964;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    line-height: 4rem;
  }
</style>
