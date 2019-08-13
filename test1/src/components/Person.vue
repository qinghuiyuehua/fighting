<template>
    <div class="person">

      <van-nav-bar id="one"
                   title="账户信息"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />

      <section id="head" class="per">
        <input type="file" id="files">
        <span style="line-height: 6rem;margin-left: 1rem">头像</span>
        <span class="pull-right" style="line-height: 6rem;margin-right: 1rem" id="a">
          <img src="../img/person.png" alt=""> &gt
        </span>
      </section>

      <section id="admin" class="per">
        <router-link :to="{path:'/updatename'}">
          <span style="line-height: 6rem;margin-left: 1rem">用户名</span>
          <span  style="line-height: 6rem;margin-left: 12rem" id="b">{{names}}</span>
          <span class="pull-right" style="line-height: 6rem;margin-right: 1rem" id="c">&gt
          </span>
        </router-link>
      </section>

      <section id="address" class="per">
        <router-link :to="{path:'/editaddress'}">
          <span style="line-height: 6rem;margin-left: 1rem">收货地址</span>
          <span class="pull-right" style="line-height: 6rem;margin-right: 1rem" id="d">&gt
        </span>
        </router-link>

      </section>
      账号绑定
      <section id="phone" class="per">
        <router-link :to="{path:'/city'}">
          <span style="line-height: 6rem;margin-left: 1rem"><img src="../img/phone.png" alt="">手机</span>
          <span class="pull-right" style="line-height: 6rem;margin-right: 1rem" id="e">&gt
        </span>
        </router-link>

      </section>
      安全设置
      <section id="password" class="per">
        <router-link :to="{path:'/updatepassword'}">
          <span style="line-height: 6rem;margin-left: 1rem">修改密码</span>
          <span class="pull-right" style="line-height: 6rem;margin-right: 1rem" id="f">修改&gt
        </span>
        </router-link>
      </section>
      <!--退出登录按钮-->
      <van-button type="danger"  size="large" @click="exits">退出登录</van-button>
    </div>
</template>

<script>
    export default {
      name: "Person",
      data(){
        return{
          names:"",
          newName:"",
        }
      },
      methods: {
        onClickLeft() {
          this.$router.go(-1);
        },
        //退出登录
        exits(){
          this.$store.commit("clearUser");
          this.$router.go(-1);
        }
      },
      created(){
        this.names = this.$store.state.a.message;
        let abc = this.$store.state;
        console.log(abc);
      }
    }

</script>

<style scoped>
  a{
    color: black;
    display: inline-block;
    width: 100%;
  }
  .person{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  #one{
    background: #3190e8;
  }
  .van-nav-bar .van-icon {
    color: white;
  }

  .van-nav-bar__title {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }
  #head{
    width: 100%;
    height: 6rem;
  }
  #head img{
    width: 4rem;
  }
  .per{
    width: 100%;
    height: 10%;
    background: white;
    font-size: 2rem;
    border:0.01rem solid #333;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  #files{
    width: 100%;
    height: 6rem;
    border: none;
    position: absolute;
    opacity: 0;
  }
  #a,#b,#c,#d,#e,#f{
    color: gray;
  }
</style>
