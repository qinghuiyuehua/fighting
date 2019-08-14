<template>
    <div class="online_payment">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">在线支付</span>
      </div>
      <!--  main  -->
      <div class="main">
        <!--   倒计时   -->
        <div class="time_div">
          <p class="time_text">支付剩余时间</p>
          <van-count-down :time="time" class="time"/>
        </div>
        <!--   支付方式   -->
        <p class="payment_mode_text">选择支付方式</p>
        <div class="payment_mode">
          <ul class="payment_two_mode">
            <li class="alipay_li">
              <img src="../img/alipay.png" class="alipay">
              <span>支付宝</span>
                <img src="../img/select.png" v-if="!show_alipay" class="alipay_img pull-right" :class="{'!show_alipay': key==1}" @click="selectPayMode(1)">

                <img src="../img/selected.png" v-if="show_alipay" class="alipay_img pull-right">
            </li>
            <li class="wechat_li">
              <img src="../img/wechat.png" class="wechat">
              <span>微信</span>
                <img src="../img/select.png"  v-if="show_alipay" class="wechat_img pull-right" :class="{'show_alipay': key==2}" @click="selectPayMode(2)">

              <img src="../img/selected.png" v-if="!show_alipay" class="wechat_img pull-right">
            </li>
          </ul>
        </div>
        <p class="sure_pay" @click="sure_pay()">确认支付</p>

        <div class="cartridge_frame" v-if="!show">
          <img src="../img/warning.png" class="warning">
          <p class="temporary">暂不开放支付功能</p>
          <p class="sure" @click="sure_btn_hidden()">确认</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "OnlinePayment",
      data() {
        return {
          time: 15 * 60 * 1000,
          show_alipay:true,
          // show_wechat:true,
          key:'',
          show: true,
        };
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
        //   选择哪一种支付方式
        selectPayMode(id){
          this.key = id;
          this.show_alipay = !this.show_alipay;
        },
        //   点击确认支付   出现提示框
        sure_pay(){
          this.show = false;
        },
        //   点击确认，提示框消失
        sure_btn_hidden(){
          this.show = true;
        },
      },

    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .online_payment{
    background-color: #f5f5f5;
    height: 100%;
    width: 100%;
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
    text-align: center;
  }

  /*   main  */
  /*   倒计时   */
  .time_div{
    padding:2.5rem 1.5rem 3rem 1.5rem;
    text-align: center;
    background-color: white;
  }
  .time_text{
    line-height: 3rem;
  }
  .time{
    font-size: 4rem;
    line-height: 4rem;
  }

  /*   支付方式   */
  .payment_mode_text{
    font-size: 1.5rem;
    line-height: 4rem;
    padding: 0 1.5rem 0 1.5rem;
  }
  .payment_mode{
    background: white;
  }
  .payment_two_mode > li{
    line-height: 7rem;
  }
  .alipay_li{
    padding: 0 1.5rem 0 1.5rem;
    border-bottom: 0.1rem solid #f5f5f5;
  }
  .wechat_li{
    padding: 0 1.5rem 0 1.5rem;
  }
  .alipay, .wechat{
    border-radius: 2rem;
    width: 4rem;
  }

  /*  右边 √ */
   .alipay_img, .wechat_img{
    width: 2.5rem;
    display: inline-block;
    line-height: 4rem;
    margin-top: 2.5rem;
    background: white;
  }
  .sure_pay{
    width: 90%;
    color: white;
    background: #4cd964;
    border-radius: 1rem;
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
