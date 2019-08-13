<template>
    <div class="updatepassword">
      <van-nav-bar id="one"
                   title="重置密码"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />

      <section><input type="text" placeholder="账号" v-model="value1"></section>
      <section><input type="text" placeholder="旧密码" v-model="value2"></section>
      <section><input type="text" placeholder="请输入新密码" v-model="value3"></section>
      <section><input type="text" placeholder="请确认密码" v-model="value4"></section>
      <section id="last">
        <input type="text" placeholder="验证码" oninput="if(value.length>4)value=value.slice(0,4);" v-model="value5">
        <span id="test">
          <img :src="test.code" alt="">
          <span @click="repeat">
            <p>看不清</p>
            <p>换一张</p>
          </span>
        </span>
      </section>

      <van-button type="primary"  size="large" @click="updates">确认修改</van-button>
    </div>
</template>

<script>
    export default {
        name: "UpdatePassword",
        data(){
          return{
            test:"",
            value1:"",
            value2:"",
            value3:"",
            value4:"",
            value5:"",
          }
        },
        methods: {
        onClickLeft() {
          this.$router.go(-1);
        },
        repeat(){
          this.$http({
            method: 'post',
            url: "https://elm.cangdu.org/v1/captchas",
            withCredentials: true, // 默认的


          }).then(res => {
            console.log(res);
            this.test = res.data;
          });
        } ,
          //修改密码
          updates(){
            this.$http({
              method: 'post',
              url: "https://elm.cangdu.org/v2/changepassword",
              data: {
                username: this.value1,
                oldpassWord:this.value2,
                newpassword:this.value3,
                confirmpassword:this.value4,
                captcha_code:this.value5,
              },
              withCredentials: true, // 默认的
            }).then(res => {
              console.log(res);
              this.test = res.data;
            });
          }
      },
      created(){
        //验证码
        this.$http({
          method: 'post',
          url: "https://elm.cangdu.org/v1/captchas",
          withCredentials: true, // 默认的


        }).then(res => {
          console.log(res);
          this.test = res.data;
        });
      }
    }

</script>

<style scoped>
  .updatepassword{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  #one{
    background: #3190e8;
  }
  .van-nav-bar .van-icon {
    color: white;
    font-size: 2rem;
  }

  .van-nav-bar__title {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

  .van-nav-bar__text {
    color: white;
    font-size: 2rem;
  }

  section{
    width: 100%;

  }
  input{
    width: 100%;
    height: 4rem;
    font-size: 2rem;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  #last{
    position: relative;
  }

  #test{
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
