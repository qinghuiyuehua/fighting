<template>
    <div class="surplus_describe">
      <div class="surplus_describe_head">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">余额问题</span>
      </div>
      <!--  文字  -->
      <div class="main_content">
        <h3>Q1: 使用余额的条件</h3>
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
        <h3>Q2: 余额可以怎么用？</h3>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        <h3>Q3:我要如何提现？</h3>
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
        <h3>Q4:为什么会提现失败？</h3>
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "SurplusDescribe",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  /*  从右侧进入*/
  .surplus_describe{
    /*animation: fadeInRight 0.2s linear forwards;*/
  }
  .surplus_describe_head{
    background: #3190e8;
    width: 100%;
    height: 4rem;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
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
    padding: 4rem 1rem 0 1rem;
  }
  h3{
    font-size: 1.7rem;
  }
  p{
    line-height: 2rem;
  }

</style>
