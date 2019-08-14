<template>
    <div class="introduce">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">推荐有奖</span>
      </div>
      <div class="main">
        <img src="../img/introduce.png" class="top_img">
        <!--   三种邀请方式   微信、QQ、面对面-->
        <van-row class="three_methods">
          <van-col span="8">
            <img src="../img/weixin.png" class="three_methods_img" @click="img_btn()">
            <p>邀请微信好友</p>
          </van-col>
          <van-col span="8">
            <img src="../img/qq.png" class="three_methods_img" @click="img_btn()">
            <p>邀请QQ好友</p>
          </van-col>
          <van-col span="8">
            <img src="../img/erweima.png" class="three_methods_img" @click="img_btn()">
            <p>面对面邀请</p>
          </van-col>
        </van-row>
        <!--   提示框   -->
        <div class="cartridge_frame" v-if="!show">
          <img src="../img/warning.png" class="warning">
          <p class="temporary">请在饿了么APP中下载</p>
          <p class="sure" @click="sure_btn_hidden()">确认</p>
        </div>
        <ul class="text-center footer">
          <li>
            <van-row class="two_line">
              <van-col span="12" class="border-right">
                <p>累计收益</p>
                <p><span class="left_number">0</span>元</p>
              </van-col>
              <van-col span="12" class="no_border_right">
                <p>成功邀请</p>
                <p><span class="right_number">0</span>人</p>
              </van-col>
            </van-row>
          </li>
          <li class="income_details">-收益明细-</li>
          <li>
            <img src="../img/qianbao.png" class="qianbao">
            <p>还不赶紧去邀请好友</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Introduce",
      data(){
        return{
          show: true,
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
        //   点击 微信/QQ/面对面图片   出现提示框
        img_btn(){
          this.show = false;
        },
        //   点击确认，提示框消失
        sure_btn_hidden(){
          this.show = true;
          // console.log('000');
        },
      },
    }
</script>

<style scoped>
  .introduce{
    background:  #f5f5f5;
    height: 100%;
  }
  .first_line{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
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
    text-align: center;
  }
  /*   红色图片  */
  .top_img{
    width: 100%;
  }
  /*   三种邀请方式   */
  .three_methods{
    background: white;
    margin-top: 0.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 2rem 0 1rem 0;
  }
  .three_methods_img{
    margin-bottom: 0.8rem;
    width: 5rem;
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

  .footer{
    margin-top: 1.5rem;
  }
  /*   中间边框   */
  .border-right{
    line-height: 1rem;
    border-right: 0.05rem solid darkgray;
  }
  /*    右边  ‘ 成功邀请 ’*/
  .no_border_right{
    line-height: 1rem;
  }
  /*   左边  数字  */
  .left_number{
    color: #ff5633;
    font-weight: 700;
    font-size: 2rem;
  }
  /*   右边  数字  */
  .right_number{
    font-weight: 700;
    font-size: 2rem;
  }

  /*  收益明细 */
  .income_details{
    line-height: 4rem;
  }

  /*    钱包图片   */
  .qianbao {
    width: 2.5rem;
    margin: 1.2rem 0 0.5rem 0;
    color: #999;
  }
</style>
