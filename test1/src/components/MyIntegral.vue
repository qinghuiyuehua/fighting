<template>
    <div class="integral">
      <!--  上部蓝色框  -->
      <div class="head">
        <!--  头部  -->
        <div class="first_line">
          <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
          <span class="title_name">我的积分</span>
        </div>
        <!--  白色框  -->
        <div class="white_frame">
          <ul>
            <li class="content-header_1">
              <span class="pull-left">当前积分</span>
              <router-link :to="{path:'/integraldescribe'}">
                <span class="surplus_text pull-right">积分说明</span>
                <van-icon name="question" class="question_icon pull-right"/>
              </router-link>
            </li>
            <li class="content-header_2">
              <span class="white_frame_surplus_Number">0</span>
              <span class="text_yuan">分</span>
            </li>
            <li class="content-header_3">
              <van-button type="danger" class="button">积分兑换商品</van-button>
            </li>
          </ul>

        </div>
      </div>
      <!--  交易明细  -->
      <div class="transaction_details">
        <p>最近30天积分记录</p>
        <img src="../img/NoTransaction.png">
        <p class="p1">最近30天无积分记录</p>
        <p class="p2">快去下单赚取大量积分吧</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MyIntegral",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .integral{
    background-color: #f5f5f5;
    height: 100%;
  }
  .head{
    background: #3190e8;
    width: 100%;
    padding-bottom: 0.7rem;
  }
  .first_line{
    line-height: 4rem;
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
  }

  /*  白色框  */
  .white_frame{
    text-align: center;
    background: white;
    width: 96%;
    margin-top: 2%;
    margin-left: 2%;
    padding: 0.8rem;
    border-radius: 0.5rem;
  }
  .content-header_1{
    line-height: 1rem;
  }
  .question_icon{
    line-height: 1rem;
    color: blue;
  }
  .surplus_text{
    color: blue;
  }

  /*    积分   */
  .white_frame_surplus_Number{
    font-size: 4.5rem;
    font-weight: 500;
  }
  .content-header_2{
    line-height: 5rem;
    text-align: left;
    padding-top: 1rem;
  }
  /*  提现按钮   */
  .button{
    background: red;
    font-size: 2rem;
    font-weight: 300;
    width: 100%;
    height: 4rem;
    border-radius: 0.3rem;
  }
  /*  交易明细  */
  .transaction_details{
    padding: 1rem;
  }
  img{
    margin-left: 25%;
    width: 14rem;
    height: 11rem;
  }
  .p1{
    margin-top: 1rem;
    font-size: 1.7rem;
    text-align: center;
  }
  .p2{
    font-size: 1rem;
    text-align: center;
  }
</style>
