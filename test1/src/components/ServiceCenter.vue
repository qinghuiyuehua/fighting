<template>
  <div class="service_center">
    <!--  头部  -->
    <div class="head">
      <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
      <span class="title_name">服务中心</span>
    </div>
    <!--  main  -->
    <div class="main">
      <!--  在线客服    客服热线  -->
      <div class="one_line">
        <a class="a_left">
          <img src="../img/kefu.png" class="a_img">
          <p class="a_name">在线客服</p>
        </a>
        <a class="a_right">
          <img src="../img/dianhua.png" class="a_img">
          <p class="a_name">客服热线</p>
        </a>

      </div>
      <!--   热门问题   -->
      <div class="hot_questions">
        <li class="hot_one_li">热门问题</li>
        <ul class="ul_li">

          <li>
            <span>超级会员权益说明</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>签到规则</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>用户等级说明</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>积分问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>教我拍大片</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>支付问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>其它问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li><span>准时达问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>会员说明</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>会员问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>红包问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li>
          <span>活动细则</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li>
            <span>补签规则</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>优惠说明</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
          <span>免责声明</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li>
          <span>代金券说明</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
            <span>商务合作</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
          <li>
          <span>余额问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li>
          <span>超赞商家</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li>
          <span>匿名购买</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
        </li>
          <li>
          <span>活动问题</span>
            <van-icon name="arrow" class="arrow-right pull-right"/>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from "vue"
    export default {
      name: "ServiceCenter",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      },
      created(){
        Vue.axios.get("https://elm.cangdu.org/v3/profile/explain").then((result)=>{
          console.log(result.data.activityCaption);
          result.data.forEach(v=>{
            console.log(v.match(/^.+Caption$/g));
          })

        }).catch((error)=>{
          console.log(error);
        })
      }
    }
</script>

<style scoped>
  .service_center{
    width: 100%;
    height: 100%;
    /*animation: fadeInRight 0.2s linear forwards;*/
  }
  a{
    text-decoration: none;
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
    padding-top: 4rem;
  }
  /*   在线客服    客服热线   */
  .one_line{
    line-heigth: 8rem;
    border-bottom: 0.05rem solid gainsboro;
  }
  a{
    display: inline-block;
    width: 49%;
    text-align: center;
    line-height: 3rem;
    padding-top: 2rem;
  }
  .a_left{
    border-right: 0.05rem solid gainsboro;
  }
  img{
    width: 3rem;
  }
  .a_name{
    color: black;
   }
  /*   热门问题*/
  .hot_questions{
    color: #666;
  }
  .hot_one_li{
    line-height: 6rem;
    font-size: 2rem;
    padding: 0 1rem 0 1rem;
  }
  .ul_li{
    line-height: 4rem;
  }
  .ul_li li{
    border-top: 0.05rem solid gainsboro;
    padding: 0 1rem 0 1rem;
  }
  .arrow-right{
    line-height: 4rem;
  }
</style>
