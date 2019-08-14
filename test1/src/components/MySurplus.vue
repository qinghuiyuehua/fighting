<template>
    <div class="surplus">
      <!--  上部蓝色框  -->
      <div class="head">
        <!--  头部  -->
        <div class="first_line">
          <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
          <span class="title_name">我的余额</span>
        </div>
        <!--  白色框  -->
        <div class="white_frame">
          <ul>
            <li class="content-header_1">
              <span class="pull-left">当前余额</span>
                <router-link :to="{path:'/surplusdescribe'}">
                  <span class="surplus_text pull-right">余额说明</span>
                  <van-icon name="question" class="question_icon pull-right"/>
                </router-link>
            </li>
            <li class="content-header_2">
              <span class="white_frame_surplus_Number">0.00</span>
              <span class="text_yuan">元</span>
            </li>
            <li class="content-header_3">
              <van-button type="info" class="button">提现</van-button>
            </li>
          </ul>

        </div>
      </div>
      <!--  交易明细  -->
      <div class="transaction_details">
        <p>交易明细</p>
        <img src="../img/NoTransaction.png">
        <p class="no">暂无明细记录</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MySurplus",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .surplus{
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
  /*    余额   */
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
    background: #3190e8;
    font-size: 2.5rem;
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
  .no{
    margin-top: 1rem;
    font-size: 1.7rem;
    text-align: center;
  }
</style>
