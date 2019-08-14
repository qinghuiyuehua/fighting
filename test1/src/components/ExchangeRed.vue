<template>
    <div class="exchange_red">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">兑换红包</span>
      </div>
      <!--   input  按钮-->
      <div class="main">
        <input type="text" placeholder="请输入兑换码" class="input_code">
        <input type="text" placeholder="验证码" class="check_code">
        <span class="check_code_right pull-right">
          <span class="left_img_fat">
          <img :src="checkCodeImg" class="left_img pull-left">
          </span>
          <span class="right">
            <li class="no_clear">看不清</li>
            <li class="change" @click="get_check_code">换一张</li>
          </span>
        </span >
        <p class="exchange_btn">兑换</p>
      </div>

    </div>
</template>

<script>
  import Vue from "vue"
    export default {
      name: "ExchangeRed",
      data(){
        return{
          checkCodeImg:[],
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
        //   点击‘看不清’更换验证码
        get_check_code(v){
          Vue.axios.post("https://elm.cangdu.org/v1/captchas").then((result)=>{
              // console.log(result.data.code);
              this.checkCodeImg = result.data.code;
            }).catch((error)=>{
              console.log(error);
            })

        },

      },
      created(){
        //   获取验证码
        Vue.axios.post("https://elm.cangdu.org/v1/captchas").then((result)=>{
          // console.log(result.data.code);
          this.checkCodeImg = result.data.code;
        }).catch((error)=>{
          console.log(error);
        })
      }

    }
</script>

<style scoped>
  .exchange_red{
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

  /*    input  */
  .main{
    padding: 1rem 0 0 1rem;
  }
  /*   兑换码  input*/
  .input_code{
    background: white;
    font-size: 1.8rem;
    border:white;
    border-radius: 0.5rem;
    width: 96%;
    line-height: 4rem;
    padding-left: 1rem;
  }
  /*   验证码 input */
  .check_code{
    background: white;
    font-size: 1.8rem;
    border:white;
    border-radius: 0.5rem;
    width: 60%;
    line-height: 4rem;
    margin: 1rem 0 0 0 ;
    padding-left: 1rem;
  }
  /*  右侧 -->  验证码图片、看不清、换一张  */
  .check_code_right{
    width: 34%;
    background: white;
    line-height: 2rem;
    border-radius: 0.5rem;
    margin: 1rem 1.3rem 0 0;
    display: flex;
    align-items: center;
  }
  /*    验证码图片   */
  .left_img{
    width: 100%;
  }
  .right{
    width: 40%;
  }
  /*    换一张   */
  .change{
    color: #3190e8;
  }
  /*   兑换按钮*/
  .exchange_btn{
    background: #ccc;;
    font-size: 2rem;
    border:white;
    border-radius: 0.5rem;
    width: 96%;
    line-height: 4rem;
    margin-top: 1rem;
    padding-left: 1rem;
    text-align: center;
  }

</style>
