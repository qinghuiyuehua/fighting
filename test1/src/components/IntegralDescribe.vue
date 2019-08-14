<template>
    <div class="integral_describe">

      <!--  右侧滑出的积分说明页面-->
      <div  class="surplus_describe">
        <div class="surplus_describe_head">
          <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
          <span class="title_name">积分问题</span>
        </div>
        <!--  文字  -->
        <div class="main_content">
          <h3 data-v-ce13f564="" id="q1-">Q1: 怎么获得积分？</h3>
          <p data-v-ce13f564="">在线支付的订单将获得订单积分奖励：</p>
          <ul data-v-ce13f564=""><li data-v-ce13f564="">积分将在用户完成评价后获得。</li>
            <li data-v-ce13f564="">可获得积分=订单金额×10（即1元=10点积分）。</li>
            <li data-v-ce13f564="">订单金额指实际付款金额，不包含活动优惠金额。</li>
            <li data-v-ce13f564="">每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</li></ul>
          <h3 data-v-ce13f564="" id="q2-">Q2: 积分用来做什么？</h3> <p data-v-ce13f564="">可以在积分商城兑换各种礼品。</p>
          <h3 data-v-ce13f564="" id="q3-">Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
          <p data-v-ce13f564="">礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
          <h3 data-v-ce13f564="" id="q4-">Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
          <p data-v-ce13f564="">不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "IntegralDescribe",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  /*  积分说明页面  */
  /*  从右侧进入*/
  .surplus_describe{
    background: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    animation: fadeInRight 0.2s linear forwards;
  }
  .surplus_describe_head{
    background: #3190e8;
    width: 100%;
    height: 4rem;
    text-align: center;
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
    line-height: 4rem;
  }
  /*  main 的文字 */
  .main_content{
    padding: 0 1rem 0 1rem;
  }
  h3{
    font-size: 1.7rem;
  }
  p{
    line-height: 2rem;
  }


</style>
