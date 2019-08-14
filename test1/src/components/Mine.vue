<template>
    <div class="mine">
      <div class="head">
        <div class="first_line">
          <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
          <span class="title_name">我的</span>
        </div>
        <router-link :to="{path:'/person'}">
          <div class="second_line">
              <!--  头像  -->
            <img src="../img/person.png" class="title_img pull-left">
              <span class="phone_num_two_line pull-left">
                <span class="phone_num">{{names}}</span>
                <span class="el-icon-mobile-phone p">暂无绑定手机号</span>
              </span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </div>
        </router-link>
      </div>
      <div class="main">
        <!--  我的余额   我的优惠  我的积分-->
        <van-row class="one">

          <router-link :to="{path:'/mysurplus'}">
            <van-col span="8" class="one_left_line">
              <p class="surplus_fat">
                <span class="surplus">0.00</span><span>元</span>
              </p>
              <p>我的余额</p>
            </van-col>
          </router-link>

          <router-link :to="{path:'/mybenefit'}">
            <van-col span="8" class="one_center_line">
              <p class="benefit_fat">
                <span class="benefit">3</span><span>个</span>
              </p>
              <p>我的优惠</p>
            </van-col>
          </router-link>

          <router-link :to="{path:'/myintegral'}">
            <van-col span="8" class="one_right_line">
              <p class="integral_fat">
                <span class="integral">0</span><span>分</span>
              </p>
              <p>我的积分</p>
            </van-col>
          </router-link>

        </van-row>

        <!--  我的订单  积分商城  饿了么会员卡-->
        <ul class="two">
          <router-link :to="{path:'/order'}">
            <li>
              <van-icon name="orders-o" class="orders-o"/>
              <span class="two_right">
              <span>我的订单</span>
              <van-icon name="arrow" class="pull-right"/>
            </span>
            </li>
          </router-link>
          <router-link :to="{path:'/integral'}">
            <li>
              <van-icon name="bag" class="bag"/>
              <span class="two_right two_border">
              <span>积分商城</span>
              <van-icon name="arrow" class="pull"/>
            </span>
            </li>
          </router-link>
          <router-link :to="{path:'/membercenter'}">
            <li>
              <van-icon name="gem" class="gem"/>
              <span class="two_right">
              <span>饿了么会员卡</span>
              <van-icon name="arrow" class="pull-right"/>
            </span>

            </li>
          </router-link>

        </ul>

        <!--  服务中心  下载APP-->
        <ul class="three">
          <router-link :to="{path:'/servicecenter'}">
            <li>
              <van-icon name="label" class="label_icon "/>
              <span class="two_right three_border">
              <span>服务中心</span>
              <van-icon name="arrow" class="pull"/>
            </span>
            </li>
          </router-link>
          <router-link :to="{path:'/downloadapp'}">
            <li>
              <van-icon name="setting" class="setting_icon"/>
              <span class="two_right">
              <span>下载饿了么APP</span>
              <van-icon name="arrow" class="pull-right"/>
            </span>
            </li>
          </router-link>

        </ul>

      </div>
    </div>
</template>

<script>
    export default {
      name: "Mine",
      data(){
        return{
          names:"",
        }
      },
      methods: {
        goBack() {
          window.history.go(-1);
        },
      },
      created(){
        this.names = this.$store.state.a.message;
        let abc = this.$store.state;
        // console.log(abc);
      }
    }
</script>

<style scoped>
  .mine{
    background-color: #f5f5f5;
    height: 100%;
  }
  .head{
    background: #3190e8;
    width: 100%;
  }
  /*  第一行  */
  .first_line{
    line-height: 3.5rem;
    text-align: center;
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
  /*  第二行  */
  .second_line{
    height: 8rem;
    padding: 1.5rem 1rem 1rem 1rem;
  }
  li{
    list-style: none;
  }
  .title_img{
    border-top-left-radius: 5rem;
    border-top-right-radius: 5rem;
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    width: 5rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
  .phone_num_two_line{
    margin-left: 1.5rem;
    width: 71%;
    margin-top: 0.75rem
  }
  .phone_num{
    font-size: 2rem;
    font-weight:800;
    color: white;
  }
  .el-icon-mobile-phone{
    color: white;
  }
  .arrow-right{
    color: white;
    margin-top: 1.5rem;
  }

  /*  main  CSS*/
  /*  one  */
  .one{
    text-align: center;
    height: 7.5rem;
    background: white;
  }
  .surplus_fat, .benefit_fat, .integral_fat{
    padding-top: 0.7rem;
  }
  .surplus{
    color: #f90;
    font-weight: 700;
    font-size: 3rem;
  }
  .benefit{
    color: #ff5f3e;
    font-weight: 700;
    font-size: 3rem;
  }
  .integral{
    color: #6ac20b;
    font-weight: 700;
    font-size: 3rem;
  }
  .one_center_line{
    border-left: 0.05rem solid gainsboro;
    border-right: 0.05rem solid gainsboro;
  }

  /*  two  */
  .two{
    line-height: 3rem;
    margin-top: 0.8rem;
    padding-top: 0.4rem;
    background: white;
  }
  .two_right{
    font-size: 1.7rem;
    line-height: 3rem;
    margin-left: 2.5rem;
    padding-bottom: 0.6rem;
  }
  .pull-right{
    line-height: 3rem;
  }
  .pull{
    line-height: 3rem;
    width: 69.4%;
    text-align: right;
  }
  /*  积分商城的  上下边框  */
  .two_border{
    padding-top: 0.8rem;
    border-top: 0.05rem solid gainsboro;
    border-bottom: 0.05rem solid gainsboro;
  }
  /*  左边三个图标 CSS　*/
  .orders-o, .bag, .gem{
    margin-left: 1.5rem;
    margin-right: -2rem;
  }
  .bag{
    color: orangered;
  }
  .gem{
    color: gold;
  }

  /*  three  */
  .three{
    margin-top: 0.8rem;
    line-height: 3rem;
    background: white;
  }
  /*  服务中心的  下边框  */
  .three_border{
    border-bottom: 0.05rem solid gainsboro;
  }
  /*  左边两个图标 CSS　*/
  .label_icon, .setting_icon{
    margin-left: 1.5rem;
    margin-right: -2rem;
  }
  .label_icon{
    color: blue;
  }
  .setting_icon{
    color: rgb(60, 171, 255);
  }
</style>
