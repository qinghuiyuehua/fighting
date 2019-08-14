<template>
    <div class="whole">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">兑换会员</span>
      </div>
      <ul>
        <li class="second_line">
          <span>成功兑换后将关联到当前账号: </span><span class="admin">1234567890123</span>
        </li>
        <li class="input_border"><input type="text" placeholder="请输入10位卡号"></li>
        <li><input type="text" placeholder="请输入6位卡密"></li>
        <li><p class="sure_pay">兑换</p></li>
      </ul>
      <footer class="footer">
        <h3>——温馨提示——</h3>
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：<b>30次</b>减免配送费。</p>
        <p>季卡：<b>90次</b>减免配送费。</p>
        <p>年卡：<b>360</b>次减免配送费。</p>
        <p class="end_line">＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </footer>

    </div>
</template>

<script>
    export default {
      name: "UseCardNumber",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .whole{
    background-color: #f5f5f5;
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

  .second_line{
    line-height: 4rem;
    margin-left: 6%;
  }
  .admin{
    font-weight: 700;
  }
  /*    账号   密码输入框*/
  input{
    border:0;
    line-height: 4rem;
    padding-left: 6%;
    width: 100%;
    font-size: 1.5rem;
  }
  .input_border{
    border-bottom: 0.05rem solid gainsboro;
  }
  /*   兑换按钮   */
  .sure_pay{
    width: 90%;
    color: white;
    background: #4cd964;
    border-radius:0.5rem;
    font-size: 2rem;
    font-weight: 700;
    margin: 3% 5% 0 5%;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
  }

  /*   footer   */
  .footer{
    margin-left: 10%;
    width: 27rem;
    color: #aaa;
    line-height: 0.8rem;
    font-size: 1rem;
  }
  h3{
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;
  }
  .end_line{
    margin-top: -0.5rem;
    line-height: 1.5rem;
  }
</style>
